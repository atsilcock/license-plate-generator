from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!

class State(db.Model, SerializerMixin):
    __tablename__ = "states"

    serialize_rules = ('-drivers.state',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    drivers = db.relationship("Driver", back_populates = "state")


class Driver(db.Model, SerializerMixin):
    __tablename__ = "drivers"

    serialize_rules = ('-license.driver', '-cars.drivers')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    state_id = db.Column(db.Integer, db.ForeignKey('states.id'))
    date_moved_to_state = db.Column(db.Date) 
    license = db.relationship("LicenseInfo", back_populates="driver")
    cars = db.relationship("Car", secondary= "driver_car", back_populates = "drivers")
    state = db.relationship("State", back_populates="drivers")


    @validates('name')
    def validate_name(self, key, value):
        if not value or len(value.strip()) == 0:
            raise ValueError("Driver name cannot be empty.")
        if len(value) > 100:
            raise ValueError("Driver name cannot exceed 100 characters.")
        return value

    @validates('state_id')
    def validate_state_id(self, key, value):
        if not value:
            raise ValueError("Driver must belong to a state.")
        return value


class Car(db.Model, SerializerMixin):
    __tablename__ = "cars"

    serialize_rules = ('-drivers.cars',)

    id = db.Column(db.Integer, primary_key=True)
    make = db.Column(db.String, nullable=False)
    model = db.Column(db.String, nullable=False)
    year = db.Column(db.Integer, nullable=False)
    color = db.Column(db.String, nullable=False)  
    vin = db.Column(db.String)
    drivers = db.relationship("Driver", secondary="driver_car", back_populates="cars")

    @validates('make')
    def validate_name(self, key, value):
        if not value:
            raise ValueError("A make must be entered")
        return value
    
    @validates('year')
    def validate_year(self, key, value):
        if not value:
            raise ValueError("A year must be entered")
        return value
    
    @validates('color')
    def validate_color(self, key, value):
        if not value:
            raise ValueError("A color must be entered")
        return value
    
    @validates('vin')
    def validate_vin(self, key, value):
        if not value:
            raise ValueError("A vin must be entered")
        return value


class LicenseInfo(db.Model, SerializerMixin):
    __tablename__ = "licenseInfo"

    serialize_rules = ('-driver.license',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    license_number = db.Column(db.String, nullable=False)
    date_of_birth = db.Column(db.Date, nullable=False)
    address = db.Column(db.String, nullable=False)
    driver_id = db.Column(db.Integer, db.ForeignKey('drivers.id'))  # Move this line above the relationship
    driver = db.relationship("Driver", back_populates="license")


    @validates("name")
    def validate_name(self, key, value):
        if not value:
            raise ValueError("A name must be entered")
        return value
    
    @validates("license_number")
    def validate_license_number(self, key, value):
        if not value:
            raise ValueError("A license number must be entered")
        return value

    @validates("date_of_birth")
    def validate_date_of_birth(self, key, value):
        if not value:
            raise ValueError("A date of birth must be entered")
        return value

    @validates("address")
    def validate_address(self, key, value):
        if not value:
            raise ValueError("An address must be entered")
        return value

# Association table for Driver and Car (many-to-many relationship)
driver_car = db.Table('driver_car',
    db.Column('driver_id', db.Integer, db.ForeignKey('drivers.id'), primary_key=True),
    db.Column('car_id', db.Integer, db.ForeignKey('cars.id'), primary_key=True),
    db.Column('age', db.Integer, nullable=False, default=25),   # Add default value
    db.Column('weight', db.Float, nullable=False, default=70.0), # Add default value
    db.Column('height', db.Float, nullable=False, default=175.0) # Add default value
)
