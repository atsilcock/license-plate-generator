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

class LicenseInformation(Resource):
    def get(self):
        licenses = [license.to_dict() for license in LicenseInfo.query.all()]
        if not licenses:
            return make_response({"message": "No licenses found"}, 404)
        return make_response(jsonify(licenses), 200)

    def post(self):
        data = request.get_json()

        new_license = LicenseInfo(
            name=data.get("name"),
            license_number=data.get("license_number"),
            date_of_birth=data.get("date_of_birth"),
            address=data.get("address")
        )

        db.session.add(new_license)
        db.session.commit()

        return make_response({"message": "License created", "license_id": new_license.id}, 201)
        
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
    
    def post(self):
        data = request.get_json()
        driver_name = data.get('driver_name')

        # Find the driver by name
        driver = Driver.query.filter_by(name=driver_name).first()
        if not driver:
            return make_response({"message": "Driver not found"}, 404)

        # Add a new car to the driver's profile
        new_car = Car(
            make=data.get("make"),
            model=data.get("model"),
            year=data.get("year"),
            color=data.get("color"),
            vin=data.get("vin")
        )

        driver.cars.append(new_car)
        db.session.add(new_car)
        db.session.commit()

        return make_response({"message": f"Car added to {driver_name}'s profile"}, 201)
    
class Cars(Resource):
    def get(self):
        cars = [car.to_dict() for car in Car.query.all()]
        if not cars:
            return make_response({"message": "No cars found"}, 404)
        return make_response(jsonify(cars), 200)
    
    def post(self):
        data = request.get_json()

        new_car = Car(
            make=data.get("make"),
            model=data.get("model"),
            year=data.get("year"),
            color=data.get("color"),
            vin=data.get("vin")
        )

        db.session.add(new_car)
        db.session.commit()

        return make_response({"message": "Car created", "car_id": new_car.id}, 201)

class CarsByID(Resource):
    def get(self, id):
        car = Car.query.filter_by(id=id).first()
        if not car:
            return make_response({"message": "Car not found"}, 404)
        return make_response(jsonify(car.to_dict()), 200)

    def delete(self, id):
        car = Car.query.filter_by(id=id).first()
        if not car:
            return make_response({"message": "Car not found"}, 404)

        db.session.delete(car)
        db.session.commit()

        return make_response({"message": "Car deleted"}, 200)
    
class CarsByVin(Resource):
    def get(self, vin):
        car = Car.query.filter_by(vin=vin).first()
        if not car:
            return make_response({"message": "Car not found"}, 404)
        return make_response(jsonify(car.to_dict()), 200)
    
    def patch(self, vin):
        data = request.get_json()
        car = Car.query.filter_by(vin=vin).first()
        if not car:
            return make_response({"message": "Car not found"}, 404)

        if "make" in data:
            car.make = data["make"]
        if "model" in data:
            car.model = data["model"]
        if "year" in data:
            car.year = data["year"]
        if "color" in data:
            car.color = data["color"]

        db.session.commit()

        return make_response({"message": "Car updated", "car_id": car.id}, 200)







api.add_resource(Drivers, "/drivers")
api.add_resource(DriverLicense, "/drivers/<int:driver_id>/license")
api.add_resource(DriverCars, "/drivers/<int:driver_id>/cars")
api.add_resource(Cars, "/cars")
api.add_resource(CarsByID, "/cars/<int:id>")
api.add_resource(LicenseInformation, "/licenseinfo")
api.add_resource(CarsByVin, "/cars/vin/<string:vin>")



if __name__ == '__main__':
    app.run(port=5555, debug=True)
