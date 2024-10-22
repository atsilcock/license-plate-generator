from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!

class State(db.Model, SerializerMixin):
    __tablename__ = "states"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    date_moved_to_state = db.Column(db.Date) 

    license_info_id = db.Column(db.Integer, db.ForeignKey('licenseInfo.id'))



class Car(db.Model, SerializerMixin):
    __tablename__ = "cars"

    id = db.Column(db.Integer, primary_key=True)
    make = db.Column(db.String, nullable=False)
    model = db.Column(db.String, nullable=False)
    year = db.Column(db.Integer, nullable=False)
    color = db.Column(db.String, nullable=False)  
    vin = db.Column(db.String)


   

class LicenseInfo(db.Model, SerializerMixin):
    __tablename__ = "licenseInfo"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    license_number = db.Column(db.String, nullable=False)
    date_of_birth = db.Column(db.Date, nullable=False)
    state_id = db.Column(db.Integer, db.ForeignKey('states.id'))
    address = db.Column(db.String, nullable=False)







    



