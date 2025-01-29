import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./reklame.css";
import Navbar from "../Navbar";

const Reklame = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    namaPemilik: "",
    alamatPemilik: "",
    rtPemilik: "",
    rwPemilik: "",
    kelurahanPemilik: "",
    kecamatanPemilik: "",
    kotaPemilik: "",
    noTelpPemilik: "",
    
    namaPerusahaan: "",
    alamatPerusahaan: "",
    rtPerusahaan: "",
    rwPerusahaan: "",
    kelurahanPerusahaan: "",
    kecamatanPerusahaan: "",
    kotaPerusahaan: "",
    noTelpPerusahaan: "",
    nikNpwp: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
        <h1>Form Pajak Reklame</h1>
        <form onSubmit={handleSubmit}>
          {/* Section 1: Data Pemilik */}
          <fieldset>
            <legend className="section-title">Data Pemilik</legend>
            <div className="form-group">
              <label>Nama Pemilik</label>
              <input type="text" name="namaPemilik" value={formData.namaPemilik} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Alamat</label>
              <input type="text" name="alamatPemilik" value={formData.alamatPemilik} onChange={handleChange} required />
            </div>
            <div className="form-group-inline">
              <label>RT</label>
              <input type="text" name="rtPemilik" value={formData.rtPemilik} onChange={handleChange} required />
              <label>RW</label>
              <input type="text" name="rwPemilik" value={formData.rwPemilik} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Kelurahan</label>
              <input type="text" name="kelurahanPemilik" value={formData.kelurahanPemilik} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Kecamatan</label>
              <input type="text" name="kecamatanPemilik" value={formData.kecamatanPemilik} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Kota/Kab</label>
              <input type="text" name="kotaPemilik" value={formData.kotaPemilik} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>No. Telp/HP</label>
              <input type="text" name="noTelpPemilik" value={formData.noTelpPemilik} onChange={handleChange} required />
            </div>
          </fieldset>

          <div className="section-separator"></div> {/* Spacer between sections */}

          {/* Section 2: Data Wajib Pajak */}
          <fieldset>
            <legend className="section-title">Data Wajib Pajak</legend>
            <div className="form-group">
              <label>Nama Perusahaan</label>
              <input type="text" name="namaPerusahaan" value={formData.namaPerusahaan} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Alamat Perusahaan</label>
              <input type="text" name="alamatPerusahaan" value={formData.alamatPerusahaan} onChange={handleChange} required />
            </div>
            <div className="form-group-inline">
              <label>RT</label>
              <input type="text" name="rtPerusahaan" value={formData.rtPerusahaan} onChange={handleChange} required />
              <label>RW</label>
              <input type="text" name="rwPerusahaan" value={formData.rwPerusahaan} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Kelurahan</label>
              <input type="text" name="kelurahanPerusahaan" value={formData.kelurahanPerusahaan} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Kecamatan</label>
              <input type="text" name="kecamatanPerusahaan" value={formData.kecamatanPerusahaan} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Kota/Kab</label>
              <input type="text" name="kotaPerusahaan" value={formData.kotaPerusahaan} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>No. Telp/HP</label>
              <input type="text" name="noTelpPerusahaan" value={formData.noTelpPerusahaan} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>NIK/NPWP</label>
              <input type="text" name="nikNpwp" value={formData.nikNpwp} onChange={handleChange} required />
            </div>
          </fieldset>

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
