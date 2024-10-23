from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!

class State(db.Model, SerializerMixin):
    __tablename__ = "states"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    date_moved_to_state = db.Column(db.Date) 

    drivers = db.relationship("Driver", back_populates = "state")


class Driver(db.Model, SerializerMixin):
    __tablename__ = "drivers"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    state_id = db.Column(db.Integer, db.ForeignKey('states.id'))


    license = db.relationship("LicenseInfo", back_populates="driver")
    car = db.relationship("Car", back_populates = "driver")
    state = db.relationship("State", back_populates="drivers")


class Car(db.Model, SerializerMixin):
    __tablename__ = "cars"

    id = db.Column(db.Integer, primary_key=True)
    make = db.Column(db.String, nullable=False)
    model = db.Column(db.String, nullable=False)
    year = db.Column(db.Integer, nullable=False)
    color = db.Column(db.String, nullable=False)  
    vin = db.Column(db.String)

    license_info_id = db.Column(db.Integer, db.ForeignKey('states.id'))

    driver = db.relationship("Driver", "car")


class LicenseInfo(db.Model, SerializerMixin):
    __tablename__ = "licenseInfo"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    license_number = db.Column(db.String, nullable=False)
    date_of_birth = db.Column(db.Date, nullable=False)
    state_id = db.Column(db.Integer, db.ForeignKey('states.id'))
    address = db.Column(db.String, nullable=False)

    license_info_id = db.Column(db.Integer, db.ForeignKey('drivers.id'))

    driver = db.relationship("Driver", back_populates="license")


# Association table for Driver and Car (many-to-many relationship)
driver_car = db.Table('driver_car',
    db.Column('driver_id', db.Integer, db.ForeignKey('drivers.id'), primary_key=True),
    db.Column('car_id', db.Integer, db.ForeignKey('cars.id'), primary_key=True)
)






    



