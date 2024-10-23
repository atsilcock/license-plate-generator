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

        return make_response(jsonify(states), 200)


      

api.add_resource(States, "/states")

if __name__ == '__main__':
    app.run(port=5555, debug=True)
