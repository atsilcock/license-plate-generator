import React, { useState } from 'react'

function DisplayDriver({ drivers, licenseInfo }) {
  const [search, setSearch] = useState('')

  const driver = drivers.find((driver) => driver.name === search)

  const driverInfo = licenseInfo.find((info) => info.name === search)


  const displayDriver = driver && driverInfo ? (
    <div className="p-6 bg-blue-400 rounded-lg shadow-lg">
      <h3 >DRIVER INFORMATION</h3>
      <p><strong>Name: </strong>{driver.name}</p>
      <p><strong>License Number:</strong> {driverInfo.license_number}</p>
      <p><strong>Address:</strong> {driverInfo.address}</p>
      <p><strong>Date of Birth:</strong> {driverInfo.date_of_birth}</p>
      <p><strong>Date Moved:</strong> {driver.date_moved_to_state}</p>
      <p><strong>Current State:</strong> {driver.state.name}</p>
    </div>
  ) : (
    <p>No driver found</p>
  );

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <div>
        <label>
          <strong>Please Enter License-Plate Number: </strong>
        </label>
        <input
          className="border-solid border-2 border-black"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        {displayDriver}
      </div>
    </div>
  );
}

export default DisplayDriver;
