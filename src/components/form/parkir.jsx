import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './parkir.css'; // File CSS untuk parkir
import Navbar from '../Navbar';
import supabase from '../supabase';


const Parkir = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    npwpd: '',
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

  // Ambil data dari localStorage
  useEffect(() => {
    const npwpd = localStorage.getItem("npwpd") || "";
    const nama_usaha = localStorage.getItem("nama_usaha") || "";
    const alamat_usaha = localStorage.getItem("alamat_usaha") || "";

    setFormData((prevData) => ({
      ...prevData,
      npwpd: npwpd,
      namaWajibPajak: nama_usaha,
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

  const handleTableChange = (index, key, value) => {
    const updatedParkirKhusus = [...formData.parkirKhusus];
    updatedParkirKhusus[index][key] = value;
    setFormData({
      ...formData,
      parkirKhusus: updatedParkirKhusus,
    });
  };

  const handleSubmit = async (e) => {
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
  
    try {
      const { data, error } = await supabase.from('parkir').insert([
        {
          npwpd: formData.npwpd,
          nama_wajib_pajak: formData.namaWajibPajak,
          alamat: formData.alamat,
          parkir_khusus: formData.parkirKhusus,
          menggunakan_kas_register: formData.menggunakanKasRegister,
          mengadakan_pencatatan: formData.mengadakanPencatatan,
        }
      ]);      
  
      if (error) throw error;
  
      alert('Data berhasil disimpan');
      navigate('/penilaianparkir'); // Sesuaikan dengan halaman yang dituju
    } catch (error) {
      console.error('Error inserting data:', error);
      alert('Gagal menyimpan data. ' + error.message);
    }
  };
  
  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>SPTPD Parkir</h2>
        <form onSubmit={handleSubmit}>
          {/* NPWPD */}
          <div className="form-group">
            <label htmlFor="npwpd">NPWPD</label>
            <input
              type="text"
              id="npwpd"
              name="npwpd"
              value={formData.npwpd}
              onChange={handleChange}
              placeholder="Masukkan NPWPD"
              readOnly
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
              readOnly
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
              readOnly
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