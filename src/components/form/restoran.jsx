/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './restoran.css'; // File CSS untuk restoran
import Navbar from '../Navbar';

const Restoran = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    npwd: '',
    namaWajibPajak: '',
    alamat: '',
    restoran: Array.from({ length: 3 }, () => ({
      meja: '',
      jumlahKursi: '',
      jumlahPengunjung: '',
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
    const updatedRestoran = [...formData.restoran];
    updatedRestoran[index][key] = value;
    setFormData({
      ...formData,
      restoran: updatedRestoran,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAtLeastOneRowFilled = formData.restoran.some(
      (row) =>
        row.meja.trim() !== '' ||
        row.jumlahKursi.trim() !== '' ||
        row.jumlahPengunjung.trim() !== ''
    );

    if (!isAtLeastOneRowFilled) {
      alert('Harap isi minimal satu baris pada tabel Restoran.');
      return;
    }

    console.log(formData); // Log data form untuk debugging
    navigate('/penilaian'); // Navigasi ke halaman "penilaian"
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>SPTPD Restoran</h2>
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

          {/* Restoran (Tabel) */}
          <div className="form-group">
            <label>Restoran</label>
            <table className="restoran-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Meja yang Tersedia</th>
                  <th>Jumlah Kursi</th>
                  <th>Jml. Pengunjung Rata-rata Per Hari</th>
                </tr>
              </thead>
              <tbody>
                {formData.restoran.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        type="number"
                        name={`meja-${index}`}
                        value={row.meja}
                        onChange={(e) =>
                          handleTableChange(index, 'meja', e.target.value)
                        }
                        placeholder="Jumlah meja"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name={`jumlahKursi-${index}`}
                        value={row.jumlahKursi}
                        onChange={(e) =>
                          handleTableChange(index, 'jumlahKursi', e.target.value)
                        }
                        placeholder="Jumlah kursi"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name={`jumlahPengunjung-${index}`}
                        value={row.jumlahPengunjung}
                        onChange={(e) =>
                          handleTableChange(index, 'jumlahPengunjung', e.target.value)
                        }
                        placeholder="Jumlah pengunjung"
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

export default Restoran;
