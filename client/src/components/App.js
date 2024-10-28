import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home"
import NavBar from "./NavBar"
import DisplayDriver from "./DisplayDriver"
import UpdateDriver from "./UpdateDriver"
import ViewStateInfo from "./ViewStateInfo"
import NewCar from "./NewCar"
import { DriverProvider } from './DriverContext'

function App() {
  return (
    <DriverProvider>
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
    </DriverProvider>
  )
}

export default App
