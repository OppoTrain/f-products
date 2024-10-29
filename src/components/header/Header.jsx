import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Header.css';  // Import the CSS file

function Header() {
  return (
    <header className="header">
      {/* Left icon */}
      <FontAwesomeIcon icon={faGlobe} className="icon" />

      {/* Center spacer */}
      <div className="spacer"></div>

      {/* Right section */}
      <button className="button">Product</button>
      <FontAwesomeIcon icon={faBars} className="icon" />
    </header>
  );
}

export default Header;
