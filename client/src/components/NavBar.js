// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="mb-6">
      <ul className="flex space-x-4">
        <li className="shadow-lg p-2 bg-gray-100">
          <Link to="/">Home</Link>
        </li>
        <li className="shadow-lg p-2 bg-gray-100">
          <Link to="/display-car-info">View Car Info</Link>
        </li>
        <li className="shadow-lg p-2 bg-gray-100">
          <Link to="/update-car-info">Update Car Info</Link>
        </li>
        <li className="shadow-lg p-2 bg-gray-100">
          <Link to="/register-car">Register Car</Link>
        </li>
        <li className="shadow-lg p-2 bg-gray-100">
          <Link to="/view-state-info">View State Information</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
