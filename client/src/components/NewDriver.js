import React from 'react'

function NewDriver() {



  return (
    <div>
        <form>
        <label>Register for a new License Plate Number</label>
        <input type="text">Name</input>
        <input type="date">Date Moved to State</input>
        <input type ="number">License Number of current State</input>
        <input type="date">Date of Birth</input>
        <lable>Type of Car you are Transfering into the state</lable>
        <input type= "text">Make</input>
        <input type= "text">Model</input>
        <input type = "date">Year</input>
        <input type = "number">Vin</input>
        </form>
      

    </div>
  )
}

export default NewDriver
