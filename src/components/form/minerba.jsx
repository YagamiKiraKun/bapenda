import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './minerba.css';
import Navbar from '../Navbar';

const Minerba = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    npwpd: '',
    nama: '',
    alamat: '',
    namaBahanMineral: '', // Menambahkan properti untuk Nama Bahan Mineral
    jumlah: '',
    lokasiPenambangan: [],
    tanggal: '',
  });

  const bahanMineralOptions = [
    { code: "01", name: "Asbes" },
    { code: "02", name: "Batu tulis" },
    { code: "03", name: "Batu setengah permata" },
    { code: "04", name: "Batu Kapur" },
    { code: "05", name: "Batu apung" },
    { code: "06", name: "Batu Permata" },
    { code: "07", name: "Bentonit" },
    { code: "08", name: "Dolomit" },
    { code: "09", name: "Feldspar" },
    { code: "10", name: "Garam batu (halite)" },
    { code: "11", name: "Grafit" },
    { code: "12", name: "Granit" },
    { code: "13", name: "Gips" },
    { code: "14", name: "Kalsit" },
    { code: "15", name: "Kaolin" },
    { code: "16", name: "Leusit" },
    { code: "17", name: "Magnesit" },
    { code: "18", name: "Mika" },
    { code: "19", name: "Marmer" },
    { code: "20", name: "Nitrat" },
    { code: "21", name: "Pasir dan Kerikil" },
    { code: "22", name: "Pasir Kuarsa" },
    { code: "23", name: "Perlit" },
    { code: "24", name: "Phospat" },
    { code: "25", name: "Talk" },
    { code: "26", name: "Tanah Serap (fullers earth)" },
    { code: "27", name: "Tanah Diatome" },
    { code: "28", name: "Tanah liat" },
    { code: "29", name: "Pasir urug" },
    { code: "30", name: "Batu Koral" },
    { code: "31", name: "Andesit" },
    { code: "32", name: "Tanah Urug, Tanah Puru, Tanah Sirtu" },
    { code: "33", name: "Batu Kali" }
  ];  

  const handleChange = (e) => {
    const { name, value, type, options } = e.target;

    if (type === 'select-multiple') {
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setFormData({
        ...formData,
        [name]: selectedOptions,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log data formulir
    navigate('/penilaian'); // Navigasikan ke halaman penilaian
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

          {/* Nama Bahan Mineral */}
          <div className="form-group">
            <label htmlFor="namaBahanMineral">Nama Bahan Mineral (Kode)</label>
            <input
              type="text"
              id="namaBahanMineral"
              name="namaBahanMineral"
              value={formData.namaBahanMineral}
              onChange={handleChange}
              placeholder="Masukkan Kode Nama Bahan Mineral"
              list="bahanMineralList"
              required
            />
            <datalist id="bahanMineralList">
              {bahanMineralOptions.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.code} - {item.name}
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

          <div className="form-group">
            <label htmlFor="lokasiPenambangan">Lokasi Penambangan</label>
            <select
              id="lokasiPenambangan"
              name="lokasiPenambangan"
              value={formData.lokasiPenambangan}
              onChange={handleChange}
              multiple
              required
            >
              <option value="Gunung">Gunung</option>
              <option value="Lahan Tambang">Lahan Tambang</option>
              <option value="Hutan">Hutan</option>
            </select>
          </div>

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