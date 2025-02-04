import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase';
import './minerba.css';
import Navbar from '../Navbar';

const Minerba = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    npwpd: '',
    nama: '',
    alamat: '',
    nama_bahan_mineral: '',
    jumlah: '',
    harga_pasar: '',
    sumber_pengambilan: '',
    tanggal: '',
  });

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
      const { data, error } = await supabase.from('minerba').insert([formData]);
      if (error) throw error;
  
      alert('Data berhasil disimpan');
      navigate('/penilaianminerba');
    } catch (error) {
      console.error('Error inserting data:', error);
      alert('Gagal menyimpan data. ' + error.message);
    }
  };
 

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>SPTPD Minerba</h2>
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

          {/* Nama Bahan Mineral */}
          <div className="form-group">
            <label htmlFor="nama_bahan_mineral">Nama Bahan Mineral (Kode)</label>
            <input
              type="text"
              id="nama_bahan_mineral"
              name="nama_bahan_mineral"
              value={formData.nama_bahan_mineral}
              onChange={handleChange}
              placeholder="Masukkan Kode Nama Bahan Mineral"
              list="bahanMineralList"
              required
            />
            <datalist id="bahanMineralList">
              {Array.from({ length: 33 }, (_, i) => ({
                code: String(i + 1).padStart(2, '0'),
              })).map((item) => (
                <option key={item.code} value={item.code}>
                  {item.code}
                </option>
              ))}
            </datalist>
            <div className="keterangan">
              <p>01 - Asbes</p>
              <p>02 - Batu tulis</p>
              <p>03 - Batu setengah permata</p>
              <p>04 - Batu Kapur</p>
              <p>05 - Batu apung</p>
              <p>06 - Batu Permata</p>
              <p>07 - Bentonit</p>
              <p>08 - Dolomit</p>
              <p>09 - Feldspar</p>
              <p>10 - Garam batu (halite)</p>
              <p>11 - Grafit</p>
              <p>12 - Granit</p>
              <p>13 - Gips</p>
              <p>14 - Kalsit</p>
              <p>15 - Kaolin</p>
              <p>16 - Leusit</p>
              <p>17 - Magnesit</p>
              <p>18 - Mika</p>
              <p>19 - Marmer</p>
              <p>20 - Nitrat</p>
              <p>21 - Pasir dan Kerikil</p>
              <p>22 - Pasir Kuarsa</p>
              <p>23 - Perlit</p>
              <p>24 - Phospat</p>
              <p>25 - Talk</p>
              <p>26 - Tanah Serap (fullers earth)</p>
              <p>27 - Tanah Diatome</p>
              <p>28 - Tanah liat</p>
              <p>29 - Pasir urug</p>
              <p>30 - Batu Koral</p>
              <p>31 - Andesit</p>
              <p>32 - Tanah Urug, Tanah Puru, Tanah Sirtu</p>
              <p>33 - Batu Kali</p>
            </div>
          </div>

          {/* Sumber Pengambilan */}
          <div className="form-group">
            <label htmlFor="sumber_pengambilan">Sumber Pengambilan (Kode)</label>
            <input
              type="text"
              id="sumber_pengambilan"
              name="sumber_pengambilan"
              value={formData.sumber_pengambilan}
              onChange={handleChange}
              placeholder="Masukkan Kode Sumber Pengambilan"
              list="sumberPengambilanList"
              required
            />
            <datalist id="sumberPengambilanList">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </datalist>
            <div className="keterangan">
              <p>1 - Sumber alam di dalam bumi</p>
              <p>2 - Sumber alam di permukaan bumi</p>
              <p>3 - Sumber alam di dalam dan di permukaan bumi</p>
            </div>
          </div>

          {/* Jumlah (ton) */}
          <div className="form-group">
            <label htmlFor="jumlah">Jumlah (ton)</label>
            <input
              type="number"
              id="jumlah"
              name="jumlah"
              value={formData.jumlah}
              onChange={handleChange}
              placeholder="Masukkan jumlah"
              required
            />
          </div>

          {/* Harga Pasar */}
          <div className="form-group">
            <label htmlFor="harga_pasar">Harga Pasar (Rp)</label>
            <input
              type="number"
              id="harga_pasar"
              name="harga_pasar"
              value={formData.harga_pasar}
              onChange={handleChange}
              placeholder="Masukkan Harga Pasar dalam Rupiah"
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

export default Minerba;
