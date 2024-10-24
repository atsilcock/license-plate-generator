import React, { useState } from "react";

function NewDriver() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [birth, setBirth] = useState("");

  const handleFormSubmission = (e) => {
    e.preventDefault();
    fetch("/drivers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        date,
        licenseNumber,
        birth,
      }),
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <h3>Register for a new License Plate Number : </h3>

        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />

        <label>Date Moved to State</label>
        <input type="date" onChange={(e) => setDate(e.target.value)} />

        <label>License Number of current State</label>
        <input
          type="number"
          onChange={(e) => setLicenseNumber(e.target.value)}
        />

        <label>Date of Birth</label>
        <input type="date" onChange={(e) => setBirth(e.target.value)} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default NewDriver;
