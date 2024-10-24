#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from datetime import datetime
from flask import request, make_response, jsonify
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import State, Driver, Car, LicenseInfo  # Import your models

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class States(Resource):
    def get(self):
        states = [state.to_dict() for state in State.query.all()]
        if not states:
            return make_response({"messsage": "error - states do not exisit"}, 404)
        else:
            return make_response(jsonify(states), 200)
    
class StatesByName(Resource):
    def get(self, name):
        state = State.query.filter_by(name=name).first()
        if state:
            return make_response(jsonify(state.to_dict()), 200)
        else:
            return make_response({"message": "State not found"}, 404)
        
class Drivers(Resource):
    def get(self):
        drivers = [driver.to_dict() for driver in Driver.query.all()]
        if not drivers:
            return make_response({"message": "Driver does not exisit"}, 404)
        return make_response(jsonify(drivers), 200)
    
    def post(self):
        data = request.get_json()

        name = data.get("name")
        date_moved_to_state_str = data.get("date_moved_to_state")
        state_id = data.get("state_id")

        try:
            date_moved_to_state = datetime.strptime(date_moved_to_state_str, "%Y-%m-%d").date()
        except ValueError:
            return make_response({"message": "Invalid date format, use YYYY-MM-DD"}, 400)

        state = State.query.get(state_id)
        if not state:
            return make_response({"message": "State not found"}, 404)

        new_driver = Driver(
            name=name,
            date_moved_to_state=date_moved_to_state,
            state_id=state.id
        )

        db.session.add(new_driver)
        db.session.commit()

        return make_response({"message": "Driver created", "driver_id": new_driver.id}, 201)
    
class DriverLicense(Resource):
    def get(self, driver_id):
        driver = Driver.query.get(driver_id)
        if not driver:
            return make_response({"message": "Driver not found"}, 404)

        if driver.license:
            return make_response(jsonify(driver.license.to_dict()), 200)
        else:
            return make_response({"message": "No license found for this driver"}, 404)
    
    def post(self, driver_id):
        data = request.get_json()

        driver = Driver.query.get(driver_id)
        if not driver:
            return make_response({"message": "Driver not found"}, 404)

        new_license = LicenseInfo(
            name=data.get("name"),
            license_number=data.get("license_number"),
            date_of_birth=data.get("date_of_birth"),
            address=data.get("address"),
            driver=driver
        )

        db.session.add(new_license)
        db.session.commit()

        return make_response({"message": "License added", "license_id": new_license.id}, 201)

class DriverCars(Resource):
    def get(self, driver_id):
        driver = Driver.query.get(driver_id)
        if not driver:
            return make_response({"message": "Driver not found"}, 404)

        cars = [car.to_dict() for car in driver.cars]
        if cars:
            return make_response(jsonify(cars), 200)
        else:
            return make_response({"message": "No cars found for this driver"}, 404)
    
    def post(self, driver_id):
        data = request.get_json()

        driver = Driver.query.get(driver_id)
        if not driver:
            return make_response({"message": "Driver not found"}, 404)

        car_data = data.get("cars")
        if car_data:
            for car in car_data:
                new_car = Car(
                    make=car.get("make"),
                    model=car.get("model"),
                    year=car.get("year"),
                    color=car.get("color"),
                    vin=car.get("vin")
                )
                driver.cars.append(new_car)
                db.session.add(new_car)

        db.session.commit()

        return make_response({"message": "Cars added"}, 201)



api.add_resource(States, "/states")
api.add_resource(StatesByName, "/states/<string:name>")
api.add_resource(Drivers, "/drivers")
api.add_resource(DriverLicense, "/drivers/<int:driver_id>/license")
api.add_resource(DriverCars, "/drivers/<int:driver_id>/cars")

if __name__ == '__main__':
    app.run(port=5555, debug=False)
