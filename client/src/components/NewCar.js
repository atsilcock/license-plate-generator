import React from "react";

function NewCar() {
  return (
    <div>
      <form>
        <h3>Type of Car you are Transfering into the state</h3>

        <label>Make</label>
        <input type="text" />

        <label>Model</label>
        <input type="text" />

        <label>Year</label>
        <input type="date" />

        <label>Vin</label>
        <input type="number" />

        <h3>Double Check all information before submitting</h3>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default NewCar;
