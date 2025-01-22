import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';
import logo from './assets/logodispenda.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Menentukan halaman saat ini
  const isDashboard = location.pathname === '/'; // Dashboard utama
  const isFormPage = location.pathname.startsWith('/form/'); // Halaman form
  const isLoginPage = location.pathname === '/login'; // Halaman login
  const isUserDashboard = location.pathname === '/welcome'; // Dashboard user setelah login
  const isDataPage = location.pathname.startsWith('/data/'); // Halaman data seperti /data/ABT

  // Fungsi untuk tombol Logout
  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');  // Mengarahkan ke halaman login
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
        {/* Tombol Home hanya muncul di halaman form dan halaman data, tidak di halaman welcome */}
        {(isFormPage || isDataPage) && !isUserDashboard && (
          <button onClick={() => navigate('/home')}>
            <FaHome className="icon" /> Home
          </button>
        )}

        {/* Tombol Logout */}
        <button onClick={handleLogout}>
          <FaSignOutAlt className="icon" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
