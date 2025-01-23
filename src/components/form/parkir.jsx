import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './parkir.css'; // File CSS untuk parkir
import Navbar from '../Navbar';

const Parkir = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    npwd: '',
    namaWajibPajak: '',
    alamat: '',
    parkirKhusus: [
      {
        jenisKendaraan: 'MOBIL',
        jumlahKendaraan: '',
        tarif: '',
        omzet: '',
      },
      {
        jenisKendaraan: 'MOTOR',
        jumlahKendaraan: '',
        tarif: '',
        omzet: '',
      },
    ],
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
    const updatedParkirKhusus = [...formData.parkirKhusus];
    updatedParkirKhusus[index][key] = value;
    setFormData({
      ...formData,
      parkirKhusus: updatedParkirKhusus,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAtLeastOneRowFilled = formData.parkirKhusus.some(
      (row) =>
        row.jumlahKendaraan.trim() !== '' ||
        row.tarif.trim() !== '' ||
        row.omzet.trim() !== ''
    );

    if (!isAtLeastOneRowFilled) {
      alert('Harap isi minimal satu baris pada tabel Parkir Khusus.');
      return;
    }

    console.log(formData); // Log data form untuk debugging
    navigate('/penilaian'); // Navigasi ke halaman "penilaian"
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>SPTPD Parkir</h2>
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

          {/* Parkir Khusus (Tabel) */}
          <div className="form-group">
            <label>Parkir Khusus</label>
            <table className="parkir-khusus-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Jenis Kendaraan</th>
                  <th>Jml. Kendaraan Parkir / Bulan</th>
                  <th>Tarif (Rp)</th>
                  <th>Omzet / Bulan (Rp)</th>
                </tr>
              </thead>
              <tbody>
                {formData.parkirKhusus.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{row.jenisKendaraan}</td>
                    <td>
                      <input
                        type="number"
                        name={`jumlahKendaraan-${index}`}
                        value={row.jumlahKendaraan}
                        onChange={(e) =>
                          handleTableChange(index, 'jumlahKendaraan', e.target.value)
                        }
                        placeholder="Jumlah kendaraan"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name={`tarif-${index}`}
                        value={row.tarif}
                        onChange={(e) =>
                          handleTableChange(index, 'tarif', e.target.value)
                        }
                        placeholder="Tarif (Rp)"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name={`omzet-${index}`}
                        value={row.omzet}
                        onChange={(e) =>
                          handleTableChange(index, 'omzet', e.target.value)
                        }
                        placeholder="Omzet (Rp)"
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

export default Parkir;
