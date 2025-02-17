/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';
import logo from './assets/logodispenda.png';

const Navbar = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole'); // Ambil peran pengguna dari localStorage

  // Fungsi untuk tombol Logout
  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('userRole'); // Hapus peran pengguna saat logout
    navigate('/login');  // Mengarahkan ke halaman login
  };

  // Menentukan halaman Home berdasarkan peran pengguna
  const handleHomeNavigation = () => {
    if (userRole === 'admin') {
      navigate('/welcome');
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="navbar">
      {/* Logo on the left */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo Dispenda" className="logo-img" />
      </div>

      {/* Brand Logo */}
      <div className="navbar-brand">DASHBOARD</div>

      {/* Navigation Buttons */}
      <div className="navbar-dropdown">
        {/* Tombol Home selalu muncul dengan tujuan sesuai peran */}
        <button onClick={handleHomeNavigation}>
          <FaHome className="icon" /> Home
        </button>

        {/* Tombol Logout selalu muncul */}
        <button onClick={handleLogout}>
          <FaSignOutAlt className="icon" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
