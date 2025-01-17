import React from 'react';
import './Welcome.css';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom'; // Menggunakan React Router untuk navigasi

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/data/${category}`);
  };

  return (
    <div className="welcome-container">
      <Navbar />
      <h1 className="welcome-title">Selamat Datang, WP ! di Sistem E-PDL Dispenda Sumatera Selatan</h1>
      {/* Menampilkan pesan selamat datang */}
      <div className="welcome-message">
        <p>Selamat datang, Anda login sebagai Wajib Pajak</p>
      </div>
      <div className="menu-container">
        <button className="menu-item" onClick={() => handleClick('ABT')}>Air Bawah Tanah</button>
        <button className="menu-item" onClick={() => handleClick('minerba')}>Minerba</button>
        <button className="menu-item" onClick={() => handleClick('ppj')}>PPJ</button>
        <button className="menu-item" onClick={() => handleClick('restoran')}>Restoran</button>
        <button className="menu-item" onClick={() => handleClick('walet')}>Walet</button>
        <button className="menu-item" onClick={() => handleClick('hotel')}>Hotel</button>
        <button className="menu-item" onClick={() => handleClick('parkir')}>Parkir</button>
        <button className="menu-item" onClick={() => handleClick('hiburan')}>Hiburan</button>
        <button className="menu-item" onClick={() => handleClick('reklame')}>Reklame</button>
      </div>
    </div>
  );
};

export default Welcome;
