import React, {useState} from 'react'

function NewDriver() {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [licenseNumber, setLicenseNumber] = useState("")
    const [birth, setBirth] = useState("")

    const handleFormSubmission = () => {
        fetch("/drivers", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, 
                date,
                licenseNumber,
                birth
            })
        })
        
    }



  return (
    <div>
        <form>
        <h3>Register for a new License Plate Number</h3>
        
        <label>Name</label>
        <input type="text" />

        <label>Date Moved to State</label>
        <input type="date" />

        <label>License Number of current State</label>
        <input type ="number" />

        <label>Date of Birth</label>
        <input type="date" />

        <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default NewDriver
