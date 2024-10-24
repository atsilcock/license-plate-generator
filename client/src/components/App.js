import React, {useState, useEffect} from "react";
// import DisplayStates from "./DisplayStates"; // Import the component
import DisplayDriver from "./DisplayDriver"

function App() {
  const [drivers, setDrivers] = useState([])
  const [search, setSearch] = useState('')


  const FilterByLicense = drivers.filter(driver => driver.license[0].license_number === search)
  console.log(FilterByLicense)

  useEffect(() => {
    fetch("drivers")
    .then(response => response.json())
    .then(data => setDrivers(data))
  },[])

  return (
    <div>
      <h1>Project Client</h1>
      <label>Please Enter Your License Number</label>
      <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
      {FilterByLicense.length > 0 ? (
        <DisplayDriver driver={FilterByLicense[0]} license={FilterByLicense[0].license[0]}/>
      ) : (
        <p>No driver found</p>
      )}
    </div>
  );
}

export default App;
