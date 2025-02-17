/* eslint-disable no-unused-vars */
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
    nikNpwp: "",

    teksReklame: "",
    jenisReklame: "",
    alamatPemasangan: "",
    rtPemasangan: "",
    rwPemasangan: "",
    kelurahanPemasangan: "",
    kotaPemasangan: "",
    statusLokasi: "",
    subStatusLokasi: "",
    platNomor: "",
    ukuranReklame: Array(8).fill({ panjang: "", lebar: "", jumlahUnit: "", jumlahMuka: "" }),
    masaPajak: "",
    jangkaWaktu: Array(3).fill({ tanggalAwal: "", tanggalAkhir: "" }),
    jenisProduk: ""
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
        <h2>Form Pajak Reklame</h2>
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

          <div className="section-separator"></div> {/* Spacer between sections */}

          {/* Section 3: Data Reklame */}
          <fieldset>
            <legend className="section-title">Data Reklame</legend>

            {/* Teks Reklame */}
            <div className="form-group">
              <label>Teks Reklame</label>
              <input type="text" name="teksReklame" value={formData.teksReklame} onChange={handleChange} required />
            </div>

            {/* Jenis Reklame */}
            <div className="form-group">
              <label>Jenis Reklame</label>
              <select name="jenisReklame" value={formData.jenisReklame} onChange={handleChange} required>
                <option value="">Pilih Jenis Reklame</option>
                {["Papan Nama/NeonBox/PNT/Lettersign/Wallsign", 
                "Banner/Spanduk/Tenda", 
                "Baliho/Billboard", 
                "Flagchain/Selebaran/Sticker", 
                "Kendaraan Berjalan", 
                "Videotron/Megatron", 
                "Balon Udara", 
                "Slide/Film", 
                "Reklame Peraga", 
                "Reklame Suara"].map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* Alamat */}
            <div className="form-group">
              <label>Alamat/Tempat Pemasangan</label>
              <input type="text" name="alamatPemasangan" placeholder="Alamat Pemasangan" value={formData.alamatPemasangan} onChange={handleChange} required />
              <input type="text" name="rtPemasangan" placeholder="RT" value={formData.rtPemasangan} onChange={handleChange} required />
              <input type="text" name="rwPemasangan" placeholder="RW" value={formData.rwPemasangan} onChange={handleChange} required />
              <input type="text" name="kelurahanPemasangan" placeholder="Kelurahan" value={formData.kelurahanPemasangan} onChange={handleChange} required />
              <input type="text" name="kotaPemasangan" placeholder="Kota/Kab" value={formData.kotaPemasangan} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Status Lokasi Pemasangan</label>
              <select name="statusLokasi" value={formData.statusLokasi} onChange={handleChange} required>
                <option value="">Pilih Status</option>
                <option value="Dalam Sarana dan Prasarana Kota">Dalam Sarana dan Prasarana Kota</option>
                <option value="Luar Sarana dan Prasarana Kota">Luar Sarana dan Prasarana Kota</option>
                <option value="Pada Kendaraan Nomor Plat">Pada Kendaraan Nomor Plat</option>
              </select>
            </div>
            {formData.statusLokasi === "Dalam Sarana dan Prasarana Kota" && (
              <div className="form-group">
                <label>Sub Status Lokasi</label>
                <select name="subStatusLokasi" value={formData.subStatusLokasi} onChange={handleChange} required>
                  <option value="">Pilih Sub Status</option>
                  <option value="Bahu Jalan/Trotoar">Bahu Jalan/Trotoar</option>
                  <option value="Shelter Bus">Shelter Bus</option>
                  <option value="Jembatan Penyebrangan Orang (JPO)">Jembatan Penyebrangan Orang (JPO)</option>
                  <option value="Taman Kota/Jalur Hijau">Taman Kota/Jalur Hijau</option>
                  <option value="Pos Jaga Polisi">Pos Jaga Polisi</option>
                  <option value="Terminal dan Pangkalan Angkutan">Terminal dan Pangkalan Angkutan</option>
                  <option value="Gelanggang Olahraga">Gelanggang Olahraga</option>
                  <option value="lainnya">Dan lainnya...</option>
                </select>
                {formData.subStatusLokasi === "lainnya" && (
                  <input type="text" name="subStatusLainnya" onChange={handleChange} placeholder="Isi lokasi lainnya" required />
                )}
              </div>
            )}
            {formData.statusLokasi === "Luar Sarana dan Prasarana Kota" && (
              <div className="form-group">
                <label>Sub Status Lokasi</label>
                <select name="subStatusLokasi" value={formData.subStatusLokasi} onChange={handleChange} required>
                  <option value="">Pilih Sub Status</option>
                  <option value="Di atas Bangunan">Di atas Bangunan</option>
                  <option value="Menempel pada Bangunan">Menempel pada Bangunan</option>
                  <option value="Median Jalan">Median Jalan</option>
                  <option value="lainnya">Dan lainnya...</option>
                </select>
                {formData.subStatusLokasi === "lainnya" && (
                  <input type="text" name="subStatusLainnya" onChange={handleChange} placeholder="Isi lokasi lainnya" required />
                )}
              </div>
            )}
            {formData.statusLokasi === "Pada Kendaraan Nomor Plat" && (
              <div className="form-group">
                <label>Nomor Plat Kendaraan</label>
                <input type="text" name="platNomor" value={formData.platNomor} onChange={handleChange} placeholder="Masukkan nomor plat" required />
              </div>
            )}

            {/* Ukuran Reklame */}
            <div className="form-group">
              <label>Ukuran Reklame</label>
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
                      <td><input type="number" name="panjang" /></td>
                      <td><input type="number" name="lebar" /></td>
                      <td><input type="number" name="jumlahUnit" /></td>
                      <td><input type="number" name="jumlahMuka" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Masa Pajak */}
            <div className="form-group">
              <label>Masa Pajak</label>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Jenis Reklame</th>
                    <th>Input Masa Pajak</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Papan Nama/NeonBox/PNT/Lettersign/Wallsign",
                    "Banner/Spanduk/Tenda",
                    "Baliho/Billboard",
                    "Flagchain/Selebaran/Sticker",
                    "Kendaraan Berjalan",
                    "Videotron/Megatron",
                    "Balon Udara",
                    "Slide/Film",
                    "Reklame Peraga",
                    "Reklame Suara"
                  ].map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item}</td>
                      <td>
                        {/* Validasi apakah jenis reklame cocok dengan yang dipilih */}
                        {formData.jenisReklame === item && (
                          <div className="input-wrapper">
                            <input
                              type="number"
                              name={`masaPajak_${index}`}
                              placeholder="Masukkan angka"
                              onChange={handleChange}
                              className="masa-pajak-input"
                            />
                            <span className="masa-pajak-label">
                              {item.includes("Papan Nama/NeonBox/PNT/Lettersign/Wallsign") 
                                ? "/Tahun"
                                : item.includes("Banner/Spanduk/Tenda") || item.includes("Baliho/Billboard") 
                                ? "hari/Tahun"
                                : item.includes("Flagchain/Selebaran/Sticker") 
                                ? "lembar"
                                : item.includes("Kendaraan Berjalan") 
                                ? "Tahun"
                                : item.includes("Videotron/Megatron") 
                                ? "bulan/Tahun"
                                : item.includes("Balon Udara") 
                                ? "Hari"
                                : item.includes("Reklame Peraga") 
                                ? "hari/kali"
                                : "detik"}
                            </span>
                          </div>
                        )}
                        {/* Jika jenis reklame tidak cocok, tampilkan input disabled */}
                        {formData.jenisReklame !== item && (
                          <input type="number" disabled placeholder="Tidak dapat diinput" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Jangka Waktu Pemasangan */}
            <div className="form-group">
              <label>Jangka Waktu Pemasangan</label>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Tanggal Awal</th>
                    <th>s.d. Tanggal Akhir</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.jangkaWaktu.map((row, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td><input type="date" name="tanggalAwal" /></td>
                      <td><input type="date" name="tanggalAkhir" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Jenis Produk Reklame */}
            <div className="form-group">
              <label>Jenis Produk Reklame</label>
              <select name="jenisProduk" value={formData.jenisProduk} onChange={handleChange} required>
                <option value="">Pilih Produk</option>
                {["Rokok", "Minuman Beralkohol", "Produk Makanan/Minuman", "Produk Kecantikan", "Produk Perbankan", "Produk Otomotif", "Produk lainnya"].map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
              {formData.jenisProduk === "Produk lainnya" && (
                <input type="text" name="produkLainnya" onChange={handleChange} placeholder="Isi jenis produk lainnya" required />
              )}
            </div>
          </fieldset>

          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reklame;