import React from 'react';
import './Welcome.css';
import Navbar from './Navbar';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Navbar />
      <h1 className="welcome-title">Selamat Datang di Sistem E-PDL Dispenda Sumatera Selatan</h1>
      <div className="menu-container">
        <div className="menu-item">Air Bawah Tanah</div>
        <div className="menu-item">Minerba</div>
        <div className="menu-item">PPJ</div>
        <div className="menu-item">Restoran</div>
        <div className="menu-item">Walet</div>
        <div className="menu-item">Hotel</div>
        <div className="menu-item">Parkir</div>
        <div className="menu-item">Hiburan</div>
        <div className="menu-item">Reklame</div>
      </div>
    </div>
  );
};

export default Welcome;
