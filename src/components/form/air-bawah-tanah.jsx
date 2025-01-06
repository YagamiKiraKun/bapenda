import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Tambahkan useNavigate
import './air-bawah-tanah.css';
import Navbar from '../Navbar';

const AirBawahTanah = () => {
  const navigate = useNavigate(); // Inisialisasi navigasi
  const [formData, setFormData] = useState({
    npwpd: '',
    nama: '',
    alamat: '',
    jenisAir: '',
    debit: '',
    lokasiAir: '',
    tanggal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log data formulir
    navigate('/penilaian'); // Navigasikan ke halaman "penilaian"
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>SPTPD Air Bawah Tanah</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="npwpd">NPWPD</label>
            <input
              type="text"
              id="npwpd"
              name="npwpd"
              value={formData.npwpd}
              onChange={handleChange}
              placeholder="Masukkan NPWPD"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="nama">Nama Wajib Pajak</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Masukkan Nama Wajib Pajak"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="alamat">Alamat</label>
            <input
              type="text"
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              placeholder="Masukkan alamat"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="jenisAir">Jenis Sumber Air</label>
            <select
              id="jenisAir"
              name="jenisAir"
              value={formData.jenisAir}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Jenis Sumber Air</option>
              <option value="Air Tanah">Air Bawah Tanah</option>
              <option value="Air Permukaan">Air Permukaan</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="lokasiAir">Lokasi Sumber Air</label>
            <select
              id="lokasiAir"
              name="lokasiAir"
              value={formData.lokasiAir}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Lokasi Sumber Air</option>
              <option value="Pemukiman">Pemukiman</option>
              <option value="Industri">Industri</option>
              <option value="Perumahan">Perumahan</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="debit">Debit (m³/s)</label>
            <input
              type="number"
              id="debit"
              name="debit"
              value={formData.debit}
              onChange={handleChange}
              placeholder="Masukkan debit"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tanggal">Tanggal Pendaftaran</label>
            <input
              type="date"
              id="tanggal"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
};

export default AirBawahTanah;
