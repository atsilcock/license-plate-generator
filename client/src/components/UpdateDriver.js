import React, { useState } from 'react';

const UpdateDriver = () => {
  const [cars, setCars] = useState([]); // Assuming you fetch the car list initially.
  const [search, setSearch] = useState(''); // VIN search input
  const [carToUpdate, setCarToUpdate] = useState(null); // Car to be updated
  const [updatedCar, setUpdatedCar] = useState({}); // Updated car details

  // Simulate fetching cars from an API (replace this with a real API call)
  const fetchCars = () => {
    // Simulated car data (replace with API response)
    setCars([
      { vin: '1HGCM82633A004352', color: 'Red', make: 'Honda', model: 'Civic', year: 2003 },
      { vin: '1HGCM82633A004353', color: 'Blue', make: 'Toyota', model: 'Camry', year: 2007 },
      // Add more car objects as needed
    ]);
  };

  // Handle search by VIN
  const handleSearch = () => {
    const foundCar = cars.find((car) => car.vin === search);
    if (foundCar) {
      setCarToUpdate(foundCar);
      setUpdatedCar(foundCar); // Prepopulate update form with existing data
    } else {
      setCarToUpdate(null);
    }
  };

  // Handle form input changes for updating the car
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  // Handle submitting the updated car data
  const handleUpdate = () => {
    fetch(`/cars/${carToUpdate.vin}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCar),
    })
      .then((response) => response.json())
      .then((data) => {
        // Optionally, update the state or notify the user
        console.log('Car updated successfully:', data);
      })
      .catch((error) => {
        console.error('Error updating car:', error);
      });
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <div>
        <label>
          <strong>Please Enter Car VIN: </strong>
        </label>
        <input
          className="border-solid border-2 border-black"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="ml-4 bg-blue-500 text-white p-2" onClick={handleSearch}>
          Search Car
        </button>
      </div>

      {carToUpdate ? (
        <div className="mt-6">
          <h3 className="text-xl font-bold">Update Car Details</h3>
          <div className="mt-4">
            <label><strong>Color:</strong></label>
            <input
              className="border-solid border-2 border-black ml-2"
              type="text"
              name="color"
              value={updatedCar.color}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label><strong>Make:</strong></label>
            <input
              className="border-solid border-2 border-black ml-2"
              type="text"
              name="make"
              value={updatedCar.make}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label><strong>Model:</strong></label>
            <input
              className="border-solid border-2 border-black ml-2"
              type="text"
              name="model"
              value={updatedCar.model}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label><strong>Year:</strong></label>
            <input
              className="border-solid border-2 border-black ml-2"
              type="number"
              name="year"
              value={updatedCar.year}
              onChange={handleInputChange}
            />
          </div>
          <button className="mt-4 bg-green-500 text-white p-2" onClick={handleUpdate}>
            Update Car
          </button>
        </div>
      ) : (
        <p className="mt-4">No car found with the given VIN.</p>
      )}
    </div>
  );
};

export default UpdateDriver;
