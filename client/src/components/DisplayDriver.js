import React from 'react'

function DisplayDriver({ license, driver }) {
    
    const carDetails = driver.cars.map((car) => {
        return (
            <div key = {car.vin} className="">
                <p><strong>Car Color: </strong> {car.color}</p>
                <p><strong>Car Make: </strong> {car.make}</p>
                <p><strong>Car Model: </strong> {car.model}</p>
                <p><strong>Car Year: </strong> {car.year}</p>
                <p><strong>Car Vin: </strong> {car.vin}</p>
            </div>
    )})
    
    return (
      <div>

        <h3>DRIVER INFORMATION</h3>
        <p><strong>Name: </strong>{license.name}</p>
        <p><strong>License Number:</strong> {license.license_number}</p>
        <p><strong>Address:</strong> {license.address}</p>
        <p><strong>Date of Birth:</strong> {license.date_of_birth}</p>
        <p><strong>Dated Moved:</strong> {driver.date_moved_to_state}</p>
        <p><strong>Current State:</strong> {driver.state.name}</p>

        

        <h3> CAR INFORMATION</h3>

        {carDetails}


      </div>
    );
  }

export default DisplayDriver
