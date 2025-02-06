import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase'; 
import './ppj.css'; 
import Navbar from '../Navbar';

const PPJ = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    npwpd: '',
    asal_tenaga_listrik: '',
    golongan_tarif: '',
    voltase: '',
    daya_listrik: '',
    tarif_per_kwh: '',
    penggunaan_listrik: Array.from({ length: 12 }, () => ({
      bulan: '',
      jumlahKwh: '',
    })),
  });

  useEffect(() => {
    const npwpd = localStorage.getItem("npwpd");
    if (npwpd) {
      setFormData((prevData) => ({
        ...prevData,
        npwpd,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTableChange = (index, key, value) => {
    const updatedPenggunaanListrik = [...formData.penggunaan_listrik];
    updatedPenggunaanListrik[index][key] = value;
    setFormData({
      ...formData,
      penggunaan_listrik: updatedPenggunaanListrik,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('penerangan_jalan').insert([formData]);
      if (error) throw error;

      alert('Data berhasil disimpan');
      navigate('/penilaianppj');
    } catch (error) {
      console.error('Error inserting data:', error);
      alert('Gagal menyimpan data. ' + error.message);
    }
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
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="asal_tenaga_listrik">Asal Tenaga Listrik</label>
            <select
              id="asal_tenaga_listrik"
              name="asal_tenaga_listrik"
              value={formData.asal_tenaga_listrik}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Asal Tenaga Listrik</option>
              <option value="PLN">PLN</option>
              <option value="Non PLN">Non PLN</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="golongan_tarif">Golongan Tarif</label>
            <select
              id="golongan_tarif"
              name="golongan_tarif"
              value={formData.golongan_tarif}
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
            <label htmlFor="daya_listrik">Daya Listrik</label>
            <select
              id="daya_listrik"
              name="daya_listrik"
              value={formData.daya_listrik}
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
            <label htmlFor="tarif_per_kwh">Tarif Listrik per kWh (Rp)</label>
            <input
              type="number"
              id="tarif_per_kwh"
              name="tarif_per_kwh"
              value={formData.tarif_per_kwh}
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
                        value={formData.penggunaan_listrik[index].jumlahKwh}
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
