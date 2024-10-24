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
          <Link to="/view-car-info">View Car Info</Link>
        </li>
        <li>
          <Link to="/moved-to-state">Moved to State</Link>
        </li>
        <li>
          <Link to="/update-driver">Update Driver Info</Link>
        </li>
        <li>
          <Link to="/delete-driver">Delete Driver</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
