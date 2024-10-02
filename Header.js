// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo1.png';  // Adjusted path to the image

const Header = () => {
  return (
    <header className="header">
      <div className="main-header">
        <div className="logoName">
          {/* Use the imported logo */}
          <img src={logo} alt="Onco.ai logo" className="site-logo" />
          
          <h1 className="site-title">Onco.ai</h1>

        </div>


        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cancer-chart">Cancer Chart</Link></li>
            <li><Link to="/prediction">Prediction Form</Link></li>
            <li><Link to="/consultancy">Doctor Consultancy</Link></li>
          </ul>
        </nav>
      </div>

      <div className="sub-nav">
        <ul>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/prevention">Prevention</Link></li>
          <li><Link to="/donation">Donate for Cancer Patients</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
