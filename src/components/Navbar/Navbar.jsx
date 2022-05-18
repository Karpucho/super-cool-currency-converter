import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="ul_list">
            <Link to='/converter' className="leftlink nav-link">Конвертер</Link>
            <Link to='/courses' className="nav-link">Курсы</Link>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
