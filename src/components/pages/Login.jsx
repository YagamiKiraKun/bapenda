import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import logoDispenda from '../assets/logodispenda.png'; // Import gambar

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Cek login untuk Wajib Pajak
    if (username === 'wp' && password === 'wp') {
      navigate('/home'); // Arahkan ke halaman Home untuk mengisi formulir
    } 
    // Cek login untuk Admin
    else if (username === 'admin' && password === 'admin') {
      navigate('/login'); // Arahkan ke halaman Login
      alert('Anda berhasil login sebagai Admin');
      navigate('/welcome'); // Arahkan ke halaman Welcome sebagai Admin
    } 
    else {
      alert('Username atau Password salah');
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Arahkan ke halaman Register untuk wajib pajak
  };

  const handleAdminLogin = () => {
    setUsername('admin'); // Set username untuk admin
    setPassword('admin'); // Set password untuk admin
    alert('Silakan tekan tombol LOGIN untuk masuk sebagai admin');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <img src={logoDispenda} alt="Logo" className="logo" />
        </div>
        <h1 className="login-title">SISTEM E-PDL DISPENDA SUMATERA SELATAN</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <span className="icon">👤</span>
            <input
              type="text"
              placeholder="Username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">LOGIN</button>
        </form>
        <div style={{ marginTop: '10px' }}>
          <button className="login-button" onClick={handleRegister}>
            Register
          </button>
        </div>
        <div style={{ marginTop: '10px' }}>
          <button className="login-button" onClick={handleAdminLogin}>
            Login sebagai Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
