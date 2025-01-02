import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import logoDispenda from './logodispenda.png';  // Import gambar

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Cek username dan password
    if (username === 'WP' && password === 'WP') {
      navigate('/welcome');  // Arahkan ke halaman Welcome
    } else {
      alert('Username atau Password salah');
    }
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
      </div>
    </div>
  );
};

export default Login;
