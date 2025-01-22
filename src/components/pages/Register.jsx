import React, { useState } from 'react';
import axios from 'axios'; // Import axios untuk request ke backend
import './Register.css'; // Mengimpor file CSS terpisah

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    namaUsaha: '',
    jenisUsaha: '',
    alamatUsaha: '',
    nomorTeleponUsaha: '',
    namaPemilik: '',
    alamatPemilik: '',
    nomorTeleponPemilik: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulasi pengiriman data ke backend
    console.log('Form Submitted:', formData);

    try {
      const response = await axios.post('http://localhost:5002/register', formData);
      console.log(response.data); // Menampilkan response dari server
      alert('Registrasi berhasil!');
      // Reset form
      setFormData({
        username: '',
        password: '',
        confirmPassword: '',
        namaUsaha: '',
        jenisUsaha: '',
        alamatUsaha: '',
        nomorTeleponUsaha: '',
        namaPemilik: '',
        alamatPemilik: '',
        nomorTeleponPemilik: '',
      });
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Terjadi kesalahan saat registrasi.');
    }
  };

  return (
    <div className="container">
      <h2>Form Pendaftaran</h2>
      <form onSubmit={handleSubmit}>
        {/* A. Identitas Usaha */}
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
          <label htmlFor="jenisUsaha">Jenis Usaha</label>
          <select
            id="jenisUsaha"
            name="jenisUsaha"
            value={formData.jenisUsaha}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Pilih Jenis Usaha</option>
            <option value="Air Bawah Tanah">Air Bawah Tanah</option>
            <option value="Minerba">Minerba</option>
            <option value="Penerangan Jalan">Penerangan Jalan</option>
            <option value="Restoran">Restoran</option>
            <option value="Walet">Walet</option>
            <option value="Hotel">Hotel</option>
            <option value="Parkir">Parkir</option>
            <option value="Hiburan">Hiburan</option>
            <option value="Reklame">Reklame</option>
          </select>
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
          <label htmlFor="nomorTeleponUsaha">Nomor Telepon</label>
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

        {/* B. Identitas Pemilik Usaha */}
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
