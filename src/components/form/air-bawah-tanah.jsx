/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase';
import './air-bawah-tanah.css';
import Navbar from '../Navbar';

const AirBawahTanah = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    npwpd: '',
    nama: '',
    alamat: '',
    jenis_air: '',
    debit: '',
    lokasi_air: '',
    tanggal: '',
  });

  console.log(formData);

  const npwpd = localStorage.getItem("npwpd");
  const nama_usaha = localStorage.getItem("nama_usaha");
  const alamat_usaha = localStorage.getItem("alamat_usaha");

  useEffect(() => {
    const npwpd = localStorage.getItem("npwpd") || "";
    const nama_usaha = localStorage.getItem("nama_usaha") || "";
    const alamat_usaha = localStorage.getItem("alamat_usaha") || "";

    setFormData((prevData) => ({
      ...prevData,
      npwpd,
      nama: nama_usaha,
      alamat: alamat_usaha,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('air_bawah_tanah').insert([formData]);
      if (error) throw error;

      alert('Data berhasil disimpan');
      navigate('/penilaian');
    } catch (error) {
      console.error('Error inserting data:', error);
      alert('Gagal menyimpan data.');
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
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="jenis_air">Jenis Sumber Air</label>
            <select
              id="jenis_air"
              name="jenis_air"
              value={formData.jenis_air}
              onChange={handleChange}
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
