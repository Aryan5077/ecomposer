import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <li><Link to="/">Contact Us</Link></li>
        <li><Link to="/SeasonalHoliday">Seasonal Holiday</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
