from faker import Faker
from config import app, db
from models import State, Driver, Car, LicenseInfo

fake = Faker()

# List of 50 U.S. States
us_states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", 
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
    "New Hampshire", "New Jersey", "New Mexico", "New York", 
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", 
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
    "West Virginia", "Wisconsin", "Wyoming"
]

# List of pre-defined car brands
car_brands = ["Honda", "Toyota", "Tesla", "Ford", "Kia", "Fisker", "Nissan", "Lexus", "Subaru"]

# List of predefined car models
car_models = ["SUV", "Hatchback", "Convertible", "Sedan", "Coupe", "Pickup", "Minivan", "Station Wagon"]

def seed_data():
    with app.app_context():
        # Clear existing data
        print("Clearing data...")
        db.session.query(LicenseInfo).delete()
        db.session.query(Car).delete()
        db.session.query(Driver).delete()
        db.session.query(State).delete()
        db.session.commit()

        # Create 50 states from the U.S. states list
        print("Seeding states...")
        states = []
        for state_name in us_states:
            state = State(
                name=state_name,
                date_moved_to_state=fake.date_this_decade()
            )
            states.append(state)
        db.session.add_all(states)
        db.session.commit()

        # Create 10 drivers, each living in a different state
        print("Seeding drivers, licenses, and cars...")
        for i in range(10):
            driver_state = states[i]  # Assign a unique state to each driver

            driver = Driver(
                name=fake.name(),
                state_id=driver_state.id  # Link driver to a unique state
            )
            db.session.add(driver)
            db.session.commit()  # Commit to generate driver ID

            # Create license info for each driver
            license = LicenseInfo(
                name=driver.name,
                license_number=fake.license_plate(),
                date_of_birth=fake.date_of_birth(minimum_age=18, maximum_age=75),
                address=fake.address(),
                driver_id=driver.id  # Link license to driver
            )
            db.session.add(license)

            # Pre-defined cars assigned to drivers
            car_brand = car_brands[i % len(car_brands)]  # Rotate through the list of car brands
            car_model = car_models[i % len(car_models)]  # Rotate through the list of car models

            car = Car(
                make=car_brand,
                model=car_model,  # Use predefined car models (SUV, Hatchback, etc.)
                year=fake.year(),
                color=fake.color_name(),
                vin=fake.unique.vin()
            )
            db.session.add(car)
            db.session.commit()  # Commit the car to the database first

            # Associate the car with the driver if it hasn't been associated yet
            if driver not in car.drivers:
                car.drivers.append(driver)
                db.session.commit()  # Commit the driver-car relationship

        db.session.commit()  # Final commit for all records

if __name__ == '__main__':
    seed_data()
