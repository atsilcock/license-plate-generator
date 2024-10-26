import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import NavBar from "./NavBar";
import DisplayDriver from "./DisplayDriver";
import UpdateDriver from "./UpdateDriver";
import ViewStateInfo from "./ViewStateInfo";
import NewCar from "./NewCar";

// Create contexts
export const DriversContext = createContext();
export const LicenseInfoContext = createContext();

function App() {
  const [drivers, setDrivers] = useState([]);
  const [licenseInfo, setLicenseInfo] = useState([]);

  useEffect(() => {
    fetch("/drivers")
      .then((response) => response.json())
      .then((data) => setDrivers(data));
  }, []);

  useEffect(() => {
    fetch("/licenseinfo")
      .then((response) => response.json())
      .then((data) => setLicenseInfo(data));
  }, []);

  return (
    <DriversContext.Provider value={{ drivers, setDrivers }}>
      <LicenseInfoContext.Provider value={{ licenseInfo, setLicenseInfo }}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/display-car-info" component={DisplayDriver} />
            <Route path="/update-car-info" component={UpdateDriver} />
            <Route path="/view-state-info" component={ViewStateInfo} />
            <Route path="/register-car" component={NewCar} />
          </Switch>
        </Router>
      </LicenseInfoContext.Provider>
    </DriversContext.Provider>
  );
}

export default App;
