// PidginPalHeader.js

import React from 'react';
import { Link } from 'react-router-dom';

const PidginPalHeader = ({ activeLink }) => {
  return (
    <div className="rectangle">
      <img src="assets/logo.svg" alt="logo" className="logo" />
      <p className="translation">English to Pidgin English Translator</p>
      <nav>
        <ul>
          <li>
            <Link to="/" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className={`nav-link ${activeLink === 'features' ? 'active' : ''}`}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PidginPalHeader;
