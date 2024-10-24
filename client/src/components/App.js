// App.js
import React, { useState, useEffect } from "react";
import RoutesConfig from "./RoutesConfig"; // Import the new RoutesConfig component

function App() {
  const [drivers, setDrivers] = useState([]);
  const [search, setSearch] = useState("");

  const FilterByLicense = drivers.filter(
    (driver) => driver.license[0].license_number === search
  );

  useEffect(() => {
    fetch("/drivers")
      .then((response) => response.json())
      .then((data) => setDrivers(data));
  }, []);

  return (
    <div>
      <RoutesConfig
        drivers={drivers}
        FilterByLicense={FilterByLicense}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
