import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import logoDispenda from '../assets/logodispenda.png';

// Inisialisasi Supabase
const supabaseUrl = 'https://eqcxtqctngivgazzhudt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxY3h0cWN0bmdpdmdhenpodWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1Mjg2NTIsImV4cCI6MjA1MzEwNDY1Mn0.ap_uwHCdsSfWp_68XLYyTkmFz2ZjDV9BImSv8E5K3Q4';
const supabase = createClient(supabaseUrl, supabaseKey);

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (username === 'admin' && password === 'admin') {
      // Login sebagai Admin
      localStorage.setItem('userRole', 'admin'); // Simpan role admin
      alert('Anda berhasil login sebagai Admin');
      navigate('/welcome');
      return;
    }
  
    try {
      // Login sebagai Wajib Pajak (WP)
      const { data, error } = await supabase
        .from('wajib_pajak')
        .select('npwpd, nama_usaha, alamat_usaha') // Ambil NPWPD, nama_usaha, dan alamat_usaha
        .eq('username', username)
        .eq('password', password)
        .single(); // Karena username seharusnya unik, kita pakai .single()
  
      if (error) {
        console.error('Login error:', error);
        alert('Terjadi kesalahan saat login.');
        return;
      }
  
      if (data) {
        localStorage.setItem('userRole', 'wajibpajak'); // Simpan role
        localStorage.setItem('npwpd', data.npwpd); // Simpan NPWPD ke Local Storage
        localStorage.setItem('nama_usaha', data.nama_usaha); // Simpan Nama Usaha ke Local Storage
        localStorage.setItem('alamat_usaha', data.alamat_usaha); // Simpan Alamat Usaha ke Local Storage
        alert('Login berhasil sebagai Wajib Pajak');
        navigate('/home');
      } else {
        alert('Username atau Password salah');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('Terjadi kesalahan tak terduga.');
    }
  };
  
  
  

  const handleRegister = () => {
    navigate('/register');
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
          <button type="submit" className="login-button">Login</button>
        </form>
        <div style={{ marginTop: '10px' }}>
          <button className="login-button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;