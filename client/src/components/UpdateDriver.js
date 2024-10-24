import React, { useState, useEffect } from 'react';

function UpdateDriver() {
  const [driver, setDriver] = useState({
    name: '',
    dateMovedToState: '',
    licenseNumber: '',
    dateOfBirth: '',
  });

  const [loading, setLoading] = useState(true);

  // Fetch driver info on component mount
  useEffect(() => {
    fetch('/drivers/1') // Replace 1 with the actual driver ID
      .then((response) => response.json())
      .then((data) => {
        setDriver({
          name: data.name,
          dateMovedToState: data.date_moved_to_state,
          licenseNumber: data.license[0].license_number, // Assuming first license
          dateOfBirth: data.date_of_birth,
        });
        setLoading(false);
      });
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriver((prevDriver) => ({
      ...prevDriver,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit updated driver info
    fetch(`/drivers/1`, { // Replace 1 with the actual driver ID
      method: 'PATCH', // Use PATCH or PUT depending on your API design
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(driver),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Driver updated:', data);
        // Optionally handle success, e.g., show a message or redirect
      });
  };

  if (loading) return <p>Loading driver info...</p>;

  return (
    <div>
      <h1>Update Driver Info</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={driver.name}
          onChange={handleChange}
        />

        <label>Date Moved to State:</label>
        <input
          type="date"
          name="dateMovedToState"
          value={driver.dateMovedToState}
          onChange={handleChange}
        />

        <label>License Number:</label>
        <input
          type="text"
          name="licenseNumber"
          value={driver.licenseNumber}
          onChange={handleChange}
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          name="dateOfBirth"
          value={driver.dateOfBirth}
          onChange={handleChange}
        />

        <button type="submit">Update Driver</button>
      </form>
    </div>
  );
}

export default UpdateDriver;
