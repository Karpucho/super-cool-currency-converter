import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  return (
  //   <nav className="navbar navbar-expand-lg">
  //   <div className="container-fluid">
  //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  //       <div className="navbar-nav">
  //           <Link to='/converter' className="nav-link">Конвертер</Link>
  //           <Link to='/courses' className="nav-link">Курсы</Link>
  //       </div>
  //     </div>
  //   </div>
  // </nav>
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
 
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
               <Link to='/converter' className="nav-link">Конвертер</Link>
            <Link to='/courses' className="nav-link">Курсы</Link>

      </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
