import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './penilaian.css';
import Navbar from '../Navbar';

const Penilaian = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    masaPajakMulai: '',
    masaPajakSelesai: '',
    omzetSebelumnya: '',
    pajakTerhitungSebelumnya: '',
    masaPajakMulaiSekarang: '',
    masaPajakSelesaiSekarang: '',
    omzetSekarang: '',
    pajakTerhitungSekarang: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateTax = (omzet) => {
    return (parseFloat(omzet) || 0) * 0.1;
  };

  const handleOmzetChange = (e, field) => {
    const { value } = e.target;
    const newFormData = { ...formData, [field]: value };

    if (field === 'omzetSebelumnya') {
      newFormData.pajakTerhitungSebelumnya = calculateTax(value);
    } else if (field === 'omzetSekarang') {
      newFormData.pajakTerhitungSekarang = calculateTax(value);
    }

    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/penilaian');
  };

  return (
    <div>
    <Navbar />
    <div className="form-container">
      <h2>SPTPD Self Assesment</h2>
      <form onSubmit={handleSubmit}>
        {/* Jumlah Pembayaran dan Pajak Terhutang Sebelumnya */}
        <h3>1. Jumlah Pembayaran dan Pajak Terhutang Sebelumnya</h3>
        <div className="form-group">
          <label htmlFor="masaPajakSebelumnya">Masa Pajak</label>
          <div>
            <label htmlFor="masaPajakMulai">Mulai</label>
            <input
              type="date"
              id="masaPajakMulai"
              name="masaPajakMulai"
              value={formData.masaPajakMulai}
              onChange={handleChange}
              required
            />
            <label htmlFor="masaPajakSelesai">Selesai</label>
            <input
              type="date"
              id="masaPajakSelesai"
              name="masaPajakSelesai"
              value={formData.masaPajakSelesai}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="omzetSebelumnya">Omzet Pajak</label>
          <input
            type="number"
            id="omzetSebelumnya"
            name="omzetSebelumnya"
            value={formData.omzetSebelumnya}
            onChange={(e) => handleOmzetChange(e, 'omzetSebelumnya')}
            placeholder="Masukkan Omzet"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tarifSebelumnya">Tarif Pajak</label>
          <input
            type="text"
            id="tarifSebelumnya"
            value="10%"
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="pajakTerhitungSebelumnya">Pajak Terhitung</label>
          <input
            type="text"
            id="pajakTerhitungSebelumnya"
            name="pajakTerhitungSebelumnya"
            value={formData.pajakTerhitungSebelumnya}
            readOnly
          />
        </div>

        {/* Jumlah Pembayaran dan Pajak Terhutang Sekarang */}
        <h3>2. Jumlah Pembayaran dan Pajak Terhutang Sekarang</h3>
        <div className="form-group">
          <label htmlFor="masaPajakSekarang">Masa Pajak</label>
          <div>
            <label htmlFor="masaPajakMulaiSekarang">Mulai</label>
            <input
              type="date"
              id="masaPajakMulaiSekarang"
              name="masaPajakMulaiSekarang"
              value={formData.masaPajakMulaiSekarang}
              onChange={handleChange}
              required
            />
            <label htmlFor="masaPajakSelesaiSekarang">Selesai</label>
            <input
              type="date"
              id="masaPajakSelesaiSekarang"
              name="masaPajakSelesaiSekarang"
              value={formData.masaPajakSelesaiSekarang}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="omzetSekarang">Omzet Pajak</label>
          <input
            type="number"
            id="omzetSekarang"
            name="omzetSekarang"
            value={formData.omzetSekarang}
            onChange={(e) => handleOmzetChange(e, 'omzetSekarang')}
            placeholder="Masukkan Omzet"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tarifSekarang">Tarif Pajak</label>
          <input
            type="text"
            id="tarifSekarang"
            value="10%"
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="pajakTerhitungSekarang">Pajak Terhitung</label>
          <input
            type="text"
            id="pajakTerhitungSekarang"
            name="pajakTerhitungSekarang"
            value={formData.pajakTerhitungSekarang}
            readOnly
          />
        </div>
        <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Penilaian;