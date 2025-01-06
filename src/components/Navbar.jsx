import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css'; // Import the CSS file
import logo from './assets/logodispenda.png'; // Import logo image

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      {/* Logo on the left */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo Dispenda" className="logo-img" />
      </div>

      {/* Brand Logo */}
      <div className="navbar-brand">
        DASHBOARD
      </div>

      {/* Navigation Buttons */}
      <div className="navbar-dropdown">
        <button
          onClick={() => navigate('/login')}
        >
          <FaHome className="icon" /> Login
        </button>
        <button
          onClick={() => navigate('/')}
        >
          <FaSignOutAlt className="icon" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
