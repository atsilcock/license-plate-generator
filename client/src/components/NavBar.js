// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="mb-6">
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/display-car-info">View Car Info</Link>
        </li>
        <li>
          <Link to="/update-car-info">Update Car Info</Link>
        </li>
        <li>
          <Link to="/register-car">Register Car</Link>
        </li>
        <li>
          <Link to="/view-state-info">View State Information</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
