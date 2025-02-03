import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'; // Tambahkan useNavigate
import supabase from '../supabase';
import './air-bawah-tanah.css';
import Navbar from '../Navbar';

const AirBawahTanah = () => {
  const navigate = useNavigate(); // Inisialisasi navigasi

  const [formData, setFormData] = useState({
    npwpd: '',
    nama: '',
    alamat: '',
    jenis_air: '',
    debit: '',
    lokasi_air: '',
    tanggal: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const npwpd = localStorage.getItem('npwpd'); // Ambil dari Local Storage
  console.log('NPWPD:', npwpd);

  const nama_usaha = localStorage.getItem('nama_usaha'); // Ambil dari Local Storage
  console.log(nama_usaha);

  const alamat_usaha = localStorage.getItem('alamat_usaha'); // Ambil dari Local Storage

  // CREATE (Tambah Data)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('air_bawah_tanah').insert([formData]);
    if (error) console.error('Error inserting data:', error);
    else {
      setFormData({ npwpd: '', nama: '', alamat: '', jenis_air: '', debit: '', lokasi_air: '', tanggal: '' });
      fetchData();
      navigate('/penilaian');
    }
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
              value={npwpd}
              onChange={(e) => setFormData({ ...formData, npwpd: e.target.value })}
              placeholder="Masukkan NPWPD"
              required
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="nama">Nama Wajib Pajak</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={nama_usaha}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              placeholder="Masukkan Nama Wajib Pajak"
              required
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="alamat">Alamat</label>
            <input
              type="text"
              id="alamat"
              name="alamat"
              value={alamat_usaha}
              onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
              placeholder="Masukkan alamat"
              required
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="jenis_air">Jenis Sumber Air</label>
            <select
              id="jenis_air"
              name="jenis_air"
              value={formData.jenis_air}
              onChange={(e) => setFormData({ ...formData, jenis_air: e.target.value })}
              required
            >
              <option value="">Pilih Jenis Sumber Air</option>
              <option value="Air Tanah">Air Bawah Tanah</option>
              <option value="Air Permukaan">Air Permukaan</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="lokasi_air">Lokasi Sumber Air</label>
            <select
              id="lokasi_air"
              name="lokasi_air"
              value={formData.lokasi_air}
              onChange={(e) => setFormData({ ...formData, lokasi_air: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, debit: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
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
