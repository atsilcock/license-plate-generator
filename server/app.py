#!/usr/bin/env python3

# Standard library imports

# Remote library imports
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
        
    def post(self, name):
        state = State.query.filter_by(name=name).first()
        if not state:
            return make_response({"message", "State does not exist"})
        else:
            data = request.get_json()
            update_move_date = State(
                date_moved_to_state = data.get("date_moved_to_state")
            )
            db.session.add(update_move_date)
            db.session.commit()

            return make_response(jsonify(state.to_dict(), 200))


api.add_resource(States, "/states")
api.add_resource(StatesByName, "/states/<string:name>")

if __name__ == '__main__':
    app.run(port=5555, debug=True)
