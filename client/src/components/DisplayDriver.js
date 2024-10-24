import React from 'react'

function DisplayDriver({ license, driver }) {
    
    const carDetails = driver.cars.map((car) => {
        return (
            <div className="mb-6 p-4 border rounded-lg shadow-sm bg-white" key = {car.vin} >
                <p><strong>Car Color: </strong> {car.color}</p>
                <p><strong>Car Make: </strong> {car.make}</p>
                <p><strong>Car Model: </strong> {car.model}</p>
                <p><strong>Car Year: </strong> {car.year}</p>
                <p><strong>Car Vin: </strong> {car.vin}</p>
            </div>
    )})
    
    return (
      <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">DRIVER INFORMATION</h3>
        <p className="mb-2"><strong>Name: </strong>{license.name}</p>
        <p className="mb-2"><strong>License Number:</strong> {license.license_number}</p>
        <p className="mb-2"><strong>Address:</strong> {license.address}</p>
        <p className="mb-2"><strong>Date of Birth:</strong> {license.date_of_birth}</p>
        <p className="mb-2"><strong>Dated Moved:</strong> {driver.date_moved_to_state}</p>
        <p className="mb-2"><strong>Current State:</strong> {driver.state.name}</p>
        <h3 className="text-2xl font-bold mb-4"> CAR INFORMATION</h3>

        {carDetails}


      </div>
    );
  }

export default DisplayDriver
