import React, { useState, useContext } from 'react'
import { DriverContext } from './DriverContext'

function DisplayDriver() {
  const { drivers, setDrivers } = useContext(DriverContext)
  const [search, setSearch] = useState('')

  const driver = drivers.find((driver) => driver.name.toLowerCase() === search.toLowerCase())

  const displayDriver = driver ? (
    <div className="p-6 bg-blue-400 rounded-lg shadow-lg mb-4">
      <h3>DRIVER INFORMATION</h3>
      <p><strong>Name: </strong>{driver.name}</p>
      <p><strong>License Number:</strong> {driver.license[0].license_number}</p>
      <p><strong>Address:</strong> {driver.license[0].address}</p>
      <p><strong>Date of Birth:</strong> {driver.license[0].date_of_birth}</p>
      <p><strong>Date Moved:</strong> {driver.date_moved_to_state}</p>
      <p><strong>Current State:</strong> {driver.state.name}</p>
    </div>
  ) : (
    <p className="mb-4">No driver found</p>
  )

  const deleteButton = (carId) => {
    fetch(`/cars/${carId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setDrivers((prevDrivers) =>
            prevDrivers.map((d) => ({
              ...d,
              cars: d.cars.filter((car) => car.id !== carId),
            }))
          )
        } else {
          console.error('Failed to delete the car')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const carDetails = driver ? (
    driver.cars.map((car) => (
      <div key={car.vin} className="p-6 bg-blue-400 rounded-lg shadow-lg mb-4">
        <p><strong>Car Color: </strong> {car.color}</p>
        <p><strong>Car Make: </strong> {car.make}</p>
        <p><strong>Car Model: </strong> {car.model}</p>
        <p><strong>Car Year: </strong> {car.year}</p>
        <p><strong>Car Vin: </strong> {car.vin}</p>
        <button
          className="bg-rose-600 border-solid border-2 border-black mr-2"
          onClick={() => deleteButton(car.id)}
        >
          DELETE
        </button>
      </div>
    ))
  ) : null

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <div>
        <label>
          <strong>Please Enter Driver Name: </strong>
        </label>
        <input
          className="border-solid border-2 border-black"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        {displayDriver}
        {carDetails}
      </div>
    </div>
  )
}

export default DisplayDriver
