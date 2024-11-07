import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Slider from '../slider/Slider';
import img from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <FontAwesomeIcon icon={faGlobe} className="icon" />
          <div className="logo-container">
            <img src={img} alt="Logo" className="logo" />
          </div>
          <div className="spacer"></div>
          <Link to="/products">
            <button className="button">Product</button>
          </Link>
          <FontAwesomeIcon icon={faBars} className="icon" />
        </div>
      </nav>
      <Slider />
    </>
  );
}

export default Navbar;
