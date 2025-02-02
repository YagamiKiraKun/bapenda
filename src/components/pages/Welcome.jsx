import React from 'react';
import './Welcome.css';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom'; // Menggunakan React Router untuk navigasi
import iconABT from '../assets/icon/air-bawah-tanah.png';
import iconMinerba from '../assets/icon/minerba.png';
import iconPPJ from '../assets/icon/ppj.png';
import iconRestoran from '../assets/icon/restoran.png';
import iconWalet from '../assets/icon/walet.png';
import iconHotel from '../assets/icon/hotel.png';
import iconParkir from '../assets/icon/parkir.png';
import iconHiburan from '../assets/icon/hiburan.png';
import iconReklame from '../assets/icon/reklame.png';

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/data/${category}`);
  };

  return (
    <div className="welcome-container">
      <Navbar />
      <h1 className="welcome-title">SELAMAT DATANG DI SISTEM E-PDL DISPENDA SUMATERA SELATAN</h1>
      {/* Menampilkan pesan selamat datang */}
      <div className="welcome-message">
        <p>Anda login sebagai Admin, Silahkan Pilih Kategori Pajak</p>
      </div>
      
      <div className="menu-container">
        <button className="menu-item" onClick={() => handleClick('ABT')}>
          <img src= {iconABT} alt="Air Bawah Tanah Icon" className="menu-icon" />
          <span className="text">Air Bawah Tanah</span>
        </button>
        <button className="menu-item" onClick={() => handleClick('minerba')}>
          <img src= {iconMinerba} alt="Minerba Icon" className="menu-icon" />
          <span className="text">Minerba</span>
        </button>
        <button className="menu-item" onClick={() => handleClick('ppj')}>
          <img src= {iconPPJ} alt="PPJ Icon" className="menu-icon" />
          <span className="text">Penerangan Jalan</span>
        </button>
        <button className="menu-item" onClick={() => handleClick('restoran')}>
          <img src= {iconRestoran} alt="Restoran Icon" className="menu-icon" />
          <span className="text">Restoran</span>
        </button>
        <button className="menu-item" onClick={() => handleClick('walet')}>
          <img src= {iconWalet} alt="Walet Icon" className="menu-icon" />
          <span className="text">Sarang Walet</span>
        </button>
        <button className="menu-item" onClick={() => handleClick('hotel')}>
          <img src= {iconHotel} alt="Hotel Icon" className="menu-icon" />
          <span className="text">Hotel</span>
        </button>
        <button className="menu-item" onClick={() => handleClick('parkir')}>
          <img src= {iconParkir} alt="Parkir Icon" className="menu-icon" />
          <span className="text">Parkir</span>
        </button>
        <button className="menu-item" onClick={() => handleClick('hiburan')}>
          <img src= {iconHiburan} alt="Hiburan Icon" className="menu-icon" />
          <span className="text">Hiburan</span>
        </button>
        <button className="menu-item" onClick={() => handleClick('reklame')}>
          <img src= {iconReklame} alt="Reklame Icon" className="menu-icon" />
          <span className="text">Reklame</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
