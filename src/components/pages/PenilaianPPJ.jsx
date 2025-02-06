import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase';
import './penilaian.css';
import Navbar from '../Navbar';

const PenilaianPPJ = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    npwpd: '',
    masa_pajak_mulai: '',
    masa_pajak_selesai: '',
    omzet_sebelumnya: '',
    pajak_terhitung_sebelumnya: '',
    masa_pajak_mulai_sekarang: '',
    masa_pajak_selesai_sekarang: '',
    omzet_sekarang: '',
    pajak_terhitung_sekarang: '',
  });

  useEffect(() => {
    const npwpd = localStorage.getItem('npwpd');
    if (npwpd) {
      setFormData((prevData) => ({ ...prevData, npwpd }));
    }
  }, []);

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

    if (field === 'omzet_sebelumnya') {
      newFormData.pajak_terhitung_sebelumnya = calculateTax(value).toFixed(2);
    } else if (field === 'omzet_sekarang') {
      newFormData.pajak_terhitung_sekarang = calculateTax(value).toFixed(2);
    }

    setFormData(newFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Data yang dikirim:', formData);
      const { data, error } = await supabase.from('penilaianppj').insert([formData]);
      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      alert('Data berhasil disimpan!');
      navigate('/cetakppj');
    } catch (error) {
      alert(`Gagal menyimpan data: ${error.message}`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>SPTPD Self Assessment</h2>
        <form onSubmit={handleSubmit}>
          <h3>1. Jumlah Pembayaran dan Pajak Terhutang Sebelumnya</h3>
          <div className="form-group">
            <label htmlFor="masa_pajak_mulai">Masa Pajak Mulai</label>
            <input
              type="date"
              id="masa_pajak_mulai"
              name="masa_pajak_mulai"
              value={formData.masa_pajak_mulai}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="masa_pajak_selesai">Masa Pajak Selesai</label>
            <input
              type="date"
              id="masa_pajak_selesai"
              name="masa_pajak_selesai"
              value={formData.masa_pajak_selesai}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="omzet_sebelumnya">Omzet Pajak Sebelumnya</label>
            <input
              type="number"
              id="omzet_sebelumnya"
              name="omzet_sebelumnya"
              value={formData.omzet_sebelumnya}
              onChange={(e) => handleOmzetChange(e, 'omzet_sebelumnya')}
              placeholder="Masukkan Omzet"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pajak_terhitung_sebelumnya">Pajak Terhitung Sebelumnya</label>
            <input
              type="text"
              id="pajak_terhitung_sebelumnya"
              name="pajak_terhitung_sebelumnya"
              value={formData.pajak_terhitung_sebelumnya}
              readOnly
            />
          </div>

          <h3>2. Jumlah Pembayaran dan Pajak Terhutang Sekarang</h3>
          <div className="form-group">
            <label htmlFor="masa_pajak_mulai_sekarang">Masa Pajak Mulai Sekarang</label>
            <input
              type="date"
              id="masa_pajak_mulai_sekarang"
              name="masa_pajak_mulai_sekarang"
              value={formData.masa_pajak_mulai_sekarang}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="masa_pajak_selesai_sekarang">Masa Pajak Selesai Sekarang</label>
            <input
              type="date"
              id="masa_pajak_selesai_sekarang"
              name="masa_pajak_selesai_sekarang"
              value={formData.masa_pajak_selesai_sekarang}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="omzet_sekarang">Omzet Pajak Sekarang</label>
            <input
              type="number"
              id="omzet_sekarang"
              name="omzet_sekarang"
              value={formData.omzet_sekarang}
              onChange={(e) => handleOmzetChange(e, 'omzet_sekarang')}
              placeholder="Masukkan Omzet"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pajak_terhitung_sekarang">Pajak Terhitung Sekarang</label>
            <input
              type="text"
              id="pajak_terhitung_sekarang"
              name="pajak_terhitung_sekarang"
              value={formData.pajak_terhitung_sekarang}
              readOnly
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PenilaianPPJ;
