import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './hotel.css'; // File CSS untuk hotel
import Navbar from '../Navbar';

const Hotel = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    npwd: '',
    namaWajibPajak: '',
    alamat: '',
    golonganHotel: '',
    lainnya: '',
    tarifDanKamar: Array.from({ length: 5 }, () => ({
      golonganKamar: '',
      tarif: '',
      jumlahKamar: '',
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
    const updatedTarifDanKamar = [...formData.tarifDanKamar];
    updatedTarifDanKamar[index][key] = value;
    setFormData({
      ...formData,
      tarifDanKamar: updatedTarifDanKamar,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAtLeastOneRowFilled = formData.tarifDanKamar.some(
      (row) =>
        row.golonganKamar.trim() !== '' ||
        row.tarif.trim() !== '' ||
        row.jumlahKamar.trim() !== ''
    );

    if (!isAtLeastOneRowFilled) {
      alert('Harap isi minimal satu baris pada tabel Tarif dan Jumlah Kamar.');
      return;
    }

    console.log(formData); // Log data form untuk debugging
    navigate('/penilaian'); // Navigasi ke halaman "penilaian"
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>SPTPD Hotel</h2>
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

          {/* Golongan Hotel */}
          <div className="form-group">
            <label htmlFor="golonganHotel">Golongan Hotel</label>
            <select
              id="golonganHotel"
              name="golonganHotel"
              value={formData.golonganHotel}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Golongan Hotel</option>
              <option value="Bintang Lima">01. Bintang Lima</option>
              <option value="Bintang Empat">02. Bintang Empat</option>
              <option value="Bintang Tiga">03. Bintang Tiga</option>
              <option value="Bintang Dua">04. Bintang Dua</option>
              <option value="Bintang Satu">05. Bintang Satu</option>
              <option value="Melati Tiga">06. Melati Tiga</option>
              <option value="Melati Dua">07. Melati Dua</option>
              <option value="Melati Satu">08. Melati Satu</option>
              <option value="Ekonomi">09. Ekonomi</option>
              <option value="Lainnya">10. Lainnya</option>
            </select>
          </div>

          {formData.golonganHotel === 'Lainnya' && (
            <div className="form-group">
              <label htmlFor="lainnya">Golongan Hotel Lainnya</label>
              <input
                type="text"
                id="lainnya"
                name="lainnya"
                value={formData.lainnya}
                onChange={handleChange}
                placeholder="Masukkan Golongan Hotel"
                required
              />
            </div>
          )}

          {/* Tarif dan Jumlah Kamar (Tabel) */}
          <div className="form-group">
            <label>Tarif dan Jumlah Kamar Hotel</label>
            <table className="tarif-dan-kamar-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Golongan Kamar</th>
                  <th>Tarif (Rp)</th>
                  <th>Jumlah Kamar</th>
                </tr>
              </thead>
              <tbody>
                {formData.tarifDanKamar.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        type="text"
                        name={`golonganKamar-${index}`}
                        value={row.golonganKamar}
                        onChange={(e) =>
                          handleTableChange(index, 'golonganKamar', e.target.value)
                        }
                        placeholder="Golongan kamar"
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
                        name={`jumlahKamar-${index}`}
                        value={row.jumlahKamar}
                        onChange={(e) =>
                          handleTableChange(index, 'jumlahKamar', e.target.value)
                        }
                        placeholder="Jumlah kamar"
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

export default Hotel;
