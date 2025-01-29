import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./reklame.css";
import Navbar from "../Navbar";

const Reklame = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jenisPermohonan: "",
    // Section 1: Data Pemilik
    namaPemilik: "",
    alamatPemilik: "",
    rtPemilik: "",
    rwPemilik: "",
    kelurahanPemilik: "",
    kecamatanPemilik: "",
    kotaPemilik: "",
    noTelpPemilik: "",
    // Section 2: Data Wajib Pajak
    namaPerusahaan: "",
    alamatPerusahaan: "",
    rtPerusahaan: "",
    rwPerusahaan: "",
    kelurahanPerusahaan: "",
    kecamatanPerusahaan: "",
    kotaPerusahaan: "",
    noTelpPerusahaan: "",
    nikNpwp: "",
    // Section 3: Data Reklame
    teksReklame: "",
    jenisReklame: "",
    alamatPemasangan: "",
    rtPemasangan: "",
    rwPemasangan: "",
    kelurahanPemasangan: "",
    kotaPemasangan: "",
    statusLokasi: "",
    statusLokasiLainnya: "",
    ukuranReklame: Array(8).fill({ panjang: "", lebar: "", jumlahUnit: "", jumlahMuka: "" }),
    masaPajak: "",
    jangkaWaktu: Array(3).fill({ tanggalAwal: "", tanggalAkhir: "" }),
    jenisProduk: "",
    jenisProdukLainnya: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUkuranChange = (index, key, value) => {
    const updatedUkuran = [...formData.ukuranReklame];
    updatedUkuran[index][key] = value;
    setFormData({ ...formData, ukuranReklame: updatedUkuran });
  };

  const handleJangkaWaktuChange = (index, key, value) => {
    const updatedJangka = [...formData.jangkaWaktu];
    updatedJangka[index][key] = value;
    setFormData({ ...formData, jangkaWaktu: updatedJangka });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/penilaian");
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>SPTPD Reklame</h2>
        <form onSubmit={handleSubmit}>
          {/* Jenis Permohonan */}
          <div className="form-group">
            <label>Jenis Permohonan</label>
            <div>
              <input type="checkbox" checked={formData.jenisPermohonan === "Pendaftaran Baru"} onChange={() => setFormData({ ...formData, jenisPermohonan: "Pendaftaran Baru" })} />
              Pendaftaran Baru
              <input type="checkbox" checked={formData.jenisPermohonan === "Perpanjangan"} onChange={() => setFormData({ ...formData, jenisPermohonan: "Perpanjangan" })} />
              Perpanjangan
            </div>
          </div>

          {/* Section 1: Data Pemilik */}
          <h3>1. Data Pemilik</h3>
          <div className="form-group">
            <label>Nama Pemilik</label>
            <input type="text" name="namaPemilik" value={formData.namaPemilik} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Alamat</label>
            <input type="text" name="alamatPemilik" value={formData.alamatPemilik} onChange={handleChange} required />
          </div>
          {/* Tambahkan input lainnya untuk RT, RW, Kelurahan, dll. */}

          {/* Section 2: Data Wajib Pajak */}
          <h3>2. Data Wajib Pajak</h3>
          <div className="form-group">
            <label>Nama Perusahaan</label>
            <input type="text" name="namaPerusahaan" value={formData.namaPerusahaan} onChange={handleChange} required />
          </div>
          {/* Tambahkan input lainnya untuk alamat, RT, RW, dll. */}

          {/* Section 3: Data Reklame */}
          <h3>3. Data Reklame</h3>
          <div className="form-group">
            <label>Teks Reklame</label>
            <input type="text" name="teksReklame" value={formData.teksReklame} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Jenis Reklame</label>
            <select name="jenisReklame" value={formData.jenisReklame} onChange={handleChange} required>
              <option value="">Pilih Jenis Reklame</option>
              <option value="Papan Nama">Papan Nama/NeonBox/PNT</option>
              <option value="Banner">Banner/Spanduk/Tenda</option>
              {/* Tambahkan opsi lainnya */}
            </select>
          </div>

          {/* Ukuran Reklame */}
          <h3>Ukuran Reklame</h3>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Panjang (m)</th>
                <th>Lebar (m)</th>
                <th>Jumlah Unit</th>
                <th>Jumlah Muka</th>
              </tr>
            </thead>
            <tbody>
              {formData.ukuranReklame.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td><input type="number" value={row.panjang} onChange={(e) => handleUkuranChange(index, "panjang", e.target.value)} /></td>
                  <td><input type="number" value={row.lebar} onChange={(e) => handleUkuranChange(index, "lebar", e.target.value)} /></td>
                  <td><input type="number" value={row.jumlahUnit} onChange={(e) => handleUkuranChange(index, "jumlahUnit", e.target.value)} /></td>
                  <td><input type="number" value={row.jumlahMuka} onChange={(e) => handleUkuranChange(index, "jumlahMuka", e.target.value)} /></td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tombol Submit */}
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reklame;
