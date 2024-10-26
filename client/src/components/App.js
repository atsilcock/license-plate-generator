import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home"
import NavBar from "./NavBar"
import DisplayDriver from "./DisplayDriver"
import UpdateDriver from "./UpdateDriver"
import ViewStateInfo from "./ViewStateInfo"
import NewCar from "./NewCar"

function App() {
  const [drivers, setDrivers] = useState([])
  console.log(drivers)

  const[licenseInfo, setLicenseInfo] = useState([])
  console.log(licenseInfo)


  useEffect(() => {
    fetch("/drivers")
      .then((response) => response.json())
      .then((data) => setDrivers(data))
  }, [])

  useEffect(() => {
    fetch("/licenseinfo")
    .then((response) => response.json())
    .then((data) => setLicenseInfo(data))
  }, [])

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/display-car-info" component={() => <DisplayDriver drivers= {drivers} licenseInfo= {licenseInfo} setDrivers={setDrivers} />} />
        <Route path="/update-car-info" component={() => <UpdateDriver driver={drivers} setDrivers={setDrivers} />} />
        <Route path="/view-state-info" component={() => <ViewStateInfo />} />
        <Route path="/register-car" component={() => <NewCar driver={drivers} setDrivers={setDrivers}/>} />
      </Switch>
    </Router>
  );
}

export default App
