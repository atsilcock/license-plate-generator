import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import DisplayDriver from "./DisplayDriver";
import NewDriver from "./NewDriver";
import DisplayStates from "./DisplayStates";
import UpdateDriver from "./UpdateDriver";
import DeleteDriver from "./DeleteDriver";

function RoutesConfig({ drivers, FilterByLicense, setSearch }) {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route
            path="/view-car-info"
            render={() => (
              <div>
                <label>
                  <strong>Please Enter License-Plate Number: </strong>
                </label>
                <input
                  className="border-solid border-2 border-black"
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
                {FilterByLicense.length > 0 ? (
                  <DisplayDriver
                    driver={FilterByLicense[0]}
                    license={FilterByLicense[0].license[0]}
                  />
                ) : (
                  <p>No driver found</p>
                )}
              </div>
            )}
          />
          <Route path="/moved-to-state" component={DisplayStates} />
          <Route path="/update-driver" component={UpdateDriver} />
          <Route path="/delete-driver" component={DeleteDriver} />
        </Switch>
      </div>
    </Router>
  );
}

export default RoutesConfig;
