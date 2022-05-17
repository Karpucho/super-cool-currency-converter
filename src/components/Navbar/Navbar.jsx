import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <Link to='/converter' className="nav-link">конвертер</Link>
            <Link to='/courses' className="nav-link">курсы</Link>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
