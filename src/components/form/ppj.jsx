import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Tambahkan useNavigate
import './ppj.css'; // Pastikan file CSS juga menggunakan nama yang sesuai
import Navbar from '../Navbar';

const PPJ = () => {
  const navigate = useNavigate(); // Inisialisasi navigasi
  const [formData, setFormData] = useState({
    npwpd: '',
    asalTenagaListrik: '',
    golonganTarif: '',
    voltase: '',
    dayaListrik: '',
    tarifPerKwh: '',
    penggunaanListrik: Array.from({ length: 12 }, () => ({
      bulan: '',
      jumlahKwh: '',
    })),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTableChange = (index, key, value) => {
    const updatedPenggunaanListrik = [...formData.penggunaanListrik];
    updatedPenggunaanListrik[index][key] = value;
    setFormData({
      ...formData,
      penggunaanListrik: updatedPenggunaanListrik,
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
        <h2>SPTPD Pajak Penerangan Jalan</h2>
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
            <label htmlFor="asalTenagaListrik">Asal Tenaga Listrik</label>
            <select
              id="asalTenagaListrik"
              name="asalTenagaListrik"
              value={formData.asalTenagaListrik}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Asal Tenaga Listrik</option>
              <option value="PLN">PLN</option>
              <option value="Non PLN">Non PLN</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="golonganTarif">Golongan Tarif</label>
            <select
              id="golonganTarif"
              name="golonganTarif"
              value={formData.golonganTarif}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Golongan Tarif</option>
              <option value="Industri/Bisnis">Industri/Bisnis</option>
              <option value="Rumah Tangga">Rumah Tangga</option>
              <option value="Sosial">Sosial</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="voltase">Voltase</label>
            <select
              id="voltase"
              name="voltase"
              value={formData.voltase}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Voltase</option>
              <option value="110 Volt">110 Volt</option>
              <option value="220 Volt">220 Volt</option>
              <option value="Selain di Atas">Selain di Atas</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dayaListrik">Daya Listrik</label>
            <select
              id="dayaListrik"
              name="dayaListrik"
              value={formData.dayaListrik}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Daya Listrik</option>
              <option value="450 Watt">450 Watt</option>
              <option value="900 Watt">900 Watt</option>
              <option value="1200 Watt">1200 Watt</option>
              <option value="1600 Watt">1600 Watt</option>
              <option value="2200 Watt">2200 Watt</option>
              <option value=">2200 Watt">Lebih dari 2200 Watt</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="tarifPerKwh">Tarif Listrik per kWh (Rp)</label>
            <input
              type="number"
              id="tarifPerKwh"
              name="tarifPerKwh"
              value={formData.tarifPerKwh}
              onChange={handleChange}
              placeholder="Masukkan tarif listrik per kWh"
              required
            />
          </div>

          <div className="form-group">
            <label>Penggunaan Listrik (kWh)</label>
            <table className="penggunaan-listrik-table">
              <thead>
                <tr>
                  <th>Bulan</th>
                  <th>Jumlah kWh</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Januari',
                  'Februari',
                  'Maret',
                  'April',
                  'Mei',
                  'Juni',
                  'Juli',
                  'Agustus',
                  'September',
                  'Oktober',
                  'November',
                  'Desember',
                ].map((bulan, index) => (
                  <tr key={index}>
                    <td>{bulan}</td>
                    <td>
                      <input
                        type="number"
                        name={`jumlahKwh-${index}`}
                        value={formData.penggunaanListrik[index].jumlahKwh}
                        onChange={(e) =>
                          handleTableChange(index, 'jumlahKwh', e.target.value)
                        }
                        placeholder="Masukkan jumlah kWh"
                        required
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
};

export default PPJ;
