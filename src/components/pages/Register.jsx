/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import './Register.css';
import { useNavigate } from 'react-router-dom';


// Inisialisasi Supabase
const supabaseUrl = 'https://eqcxtqctngivgazzhudt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxY3h0cWN0bmdpdmdhenpodWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1Mjg2NTIsImV4cCI6MjA1MzEwNDY1Mn0.ap_uwHCdsSfWp_68XLYyTkmFz2ZjDV9BImSv8E5K3Q4';
const supabase = createClient(supabaseUrl, supabaseKey);

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    namaUsaha: '',
    alamatUsaha: '',
    nomorTeleponUsaha: '',
    namaPemilik: '',
    alamatPemilik: '',
    nomorTeleponPemilik: ''
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Password dan Konfirmasi Password tidak cocok!');
      return;
    }

    try {
      const npwpd = `NPWPD-${Date.now()}`; // Generate NPWPD unik
      const { data, error } = await supabase.from('wajib_pajak').insert([
        {
          username: formData.username,  
          password: formData.password,
          npwpd: npwpd,
          nama_usaha: formData.namaUsaha,
          alamat_usaha: formData.alamatUsaha,
          nomor_telepon_usaha: formData.nomorTeleponUsaha,
          nama_pemilik: formData.namaPemilik,
          alamat_pemilik: formData.alamatPemilik,
          nomor_telepon_pemilik: formData.nomorTeleponPemilik
        },
      ]);

      if (error) {
        console.error('Error during registration:', error);
        alert(`Terjadi kesalahan saat registrasi: ${error.message}`);
      } else {
        console.log('Registration successful:', data);
        alert('Registrasi berhasil!');
        setFormData({
          username: '',
          password: '',
          confirmPassword: '',
          namaUsaha: '',
          alamatUsaha: '',
          nomorTeleponUsaha: '',
          namaPemilik: '',
          alamatPemilik: '',
          nomorTeleponPemilik: ''
        });
        navigate('/login');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('Terjadi kesalahan tak terduga: ' + error.message);
    }
  };

  return (
    <div className="container">
      <h2>Form Pendaftaran</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="confirmPassword">Konfirmasi Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="namaUsaha">Nama Usaha</label>
          <input
            type="text"
            id="namaUsaha"
            name="namaUsaha"
            value={formData.namaUsaha}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="alamatUsaha">Alamat Usaha</label>
          <textarea
            id="alamatUsaha"
            name="alamatUsaha"
            value={formData.alamatUsaha}
            onChange={handleChange}
            required
            rows="4"
            className="textarea"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="nomorTeleponUsaha">Nomor Telepon Usaha</label>
          <input
            type="tel"
            id="nomorTeleponUsaha"
            name="nomorTeleponUsaha"
            value={formData.nomorTeleponUsaha}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="namaPemilik">Nama Pemilik</label>
          <input
            type="text"
            id="namaPemilik"
            name="namaPemilik"
            value={formData.namaPemilik}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="alamatPemilik">Alamat Pemilik</label>
          <textarea
            id="alamatPemilik"
            name="alamatPemilik"
            value={formData.alamatPemilik}
            onChange={handleChange}
            required
            rows="4"
            className="textarea"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="nomorTeleponPemilik">Nomor Telepon Pemilik</label>
          <input
            type="tel"
            id="nomorTeleponPemilik"
            name="nomorTeleponPemilik"
            value={formData.nomorTeleponPemilik}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <button type="submit" className="button">Daftar</button>
      </form>
    </div>
  );
};

export default RegistrationForm;