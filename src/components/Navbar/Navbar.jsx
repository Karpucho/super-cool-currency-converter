import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <Link to='/converter' className="btn_nav btn btn-primary btn-lg" role="button">Конвертер</Link>
      <Link to='/courses' className="btn_nav btn btn-primary btn-lg" role="button">Курсы</Link>
    </div>
  );
}

export default Navbar;
