import React, { useState, useContext } from "react"
import { DriverContext } from './DriverContext'

function NewCar() {
  const { drivers, setDrivers } = useContext(DriverContext)
  const [driverName, setDriverName] = useState("")
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [color, setColor] = useState("")
  const [vin, setVin] = useState("")

  const handleFormSubmission = (e) => {
    e.preventDefault()

    fetch(`/drivers?name=${driverName}`)
      .then((response) => response.json())
      .then((driverData) => {
        const driverId = driverData.id
        return fetch(`/drivers/${driverId}/cars`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            make: make,
            model: model,
            year: year,
            color: color,
            vin: vin,
          }),
        })
        .then((response) => response.json())
        .then((carData) => {
          setDrivers((prevDrivers) => {
            return prevDrivers.map((driver) => {
              if (driver.id === driverId) {
                return {
                  ...driver,
                  cars: [...driver.cars, carData]
                }
              } else {
                return driver
              }
            })
          })
        })
      })
  }

  return (
    <div>
      <form
        onSubmit={handleFormSubmission}
        className="p-6 bg-white shadow-lg rounded-lg"
      >
        <h3 className="text-xl font-bold mb-4">
          Add a New Car to a Driver's Profile
        </h3>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-1">Driver Name</label>
            <input
              type="text"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter driver's name"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Car Make</label>
            <input
              type="text"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Car Model</label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Car Year</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Car Color</label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Car VIN</label>
            <input
              type="text"
              value={vin}
              onChange={(e) => setVin(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add Car
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewCar
