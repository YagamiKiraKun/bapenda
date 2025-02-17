/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './walet.css'; // File CSS untuk walet
import Navbar from '../Navbar';

const Walet = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    npwd: '',
    namaWajibPajak: '',
    alamat: '',
    sarangWalet: Array.from({ length: 3 }, () => ({
      luasGedung: '',
      jumlahTitikSarang: '',
      jumlahKg: '',
    })),
    menggunakanKasRegister: '',
    mengadakanPencatatan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTableChange = (index, key, value) => {
    const updatedSarangWalet = [...formData.sarangWalet];
    updatedSarangWalet[index][key] = value;
    setFormData({
      ...formData,
      sarangWalet: updatedSarangWalet,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAtLeastOneRowFilled = formData.sarangWalet.some(
      (row) =>
        row.luasGedung.trim() !== '' ||
        row.jumlahTitikSarang.trim() !== '' ||
        row.jumlahKg.trim() !== ''
    );

    if (!isAtLeastOneRowFilled) {
      alert('Harap isi minimal satu baris pada tabel Sarang Walet.');
      return;
    }

    console.log(formData); // Log data form untuk debugging
    navigate('/penilaian'); // Navigasi ke halaman "penilaian"
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>SPTPD Sarang Walet</h2>
        <form onSubmit={handleSubmit}>
          {/* NPWD */}
          <div className="form-group">
            <label htmlFor="npwd">NPWD</label>
            <input
              type="text"
              id="npwd"
              name="npwd"
              value={formData.npwd}
              onChange={handleChange}
              placeholder="Masukkan NPWD"
              required
            />
          </div>

          {/* Nama Wajib Pajak */}
          <div className="form-group">
            <label htmlFor="namaWajibPajak">Nama Wajib Pajak</label>
            <input
              type="text"
              id="namaWajibPajak"
              name="namaWajibPajak"
              value={formData.namaWajibPajak}
              onChange={handleChange}
              placeholder="Masukkan Nama Wajib Pajak"
              required
            />
          </div>

          {/* Alamat */}
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

          {/* Sarang Walet (Tabel) */}
          <div className="form-group">
            <label>Sarang Walet</label>
            <table className="sarang-walet-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Luas Gedung (m²)</th>
                  <th>Jumlah Titik Sarang</th>
                  <th>Jml (Kg)</th>
                </tr>
              </thead>
              <tbody>
                {formData.sarangWalet.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        type="number"
                        name={`luasGedung-${index}`}
                        value={row.luasGedung}
                        onChange={(e) =>
                          handleTableChange(index, 'luasGedung', e.target.value)
                        }
                        placeholder="Luas gedung"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name={`jumlahTitikSarang-${index}`}
                        value={row.jumlahTitikSarang}
                        onChange={(e) =>
                          handleTableChange(index, 'jumlahTitikSarang', e.target.value)
                        }
                        placeholder="Jumlah titik sarang"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name={`jumlahKg-${index}`}
                        value={row.jumlahKg}
                        onChange={(e) =>
                          handleTableChange(index, 'jumlahKg', e.target.value)
                        }
                        placeholder="Jumlah (Kg)"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Menggunakan Kas Register */}
          <div className="form-group">
            <label htmlFor="menggunakanKasRegister">Menggunakan Kas Register</label>
            <select
              id="menggunakanKasRegister"
              name="menggunakanKasRegister"
              value={formData.menggunakanKasRegister}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Opsi</option>
              <option value="Ya">Ya</option>
              <option value="Tidak">Tidak</option>
            </select>
          </div>

          {/* Mengadakan Pencatatan */}
          <div className="form-group">
            <label htmlFor="mengadakanPencatatan">Mengadakan Pembukaan/Pencatatan</label>
            <select
              id="mengadakanPencatatan"
              name="mengadakanPencatatan"
              value={formData.mengadakanPencatatan}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Opsi</option>
              <option value="Ya">Ya</option>
              <option value="Tidak">Tidak</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
};

export default Walet;
