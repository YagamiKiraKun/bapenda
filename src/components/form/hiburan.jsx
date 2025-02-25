/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hiburan.css"; // File CSS untuk hiburan
import Navbar from "../Navbar";

const Hiburan = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    npwd: "",
    namaWajibPajak: "",
    alamat: "",
    hiburan: "",
    namaHiburanLainnya: "",
    hargaTandaMasuk: [
      { kelas: "", harga: "" },
      { kelas: "", harga: "" },
      { kelas: "", harga: "" },
    ],
    jumlahPertunjukanHariBiasaKali: "",
    jumlahPertunjukanHariLiburKali: "",
    jumlahPengunjungHariBiasaOrang: "",
    jumlahPengunjungHariLiburOrang: "",
    jumlahMejaMesin: "",
    jumlahKamarRuangan: "",
    karcisBebas: "",
    jumlahKarcisBebas: "",
    penjualanMesinTiket: "",
    melaksanakanPembukuan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTableChange = (index, key, value) => {
    const updatedHargaTandaMasuk = [...formData.hargaTandaMasuk];
    updatedHargaTandaMasuk[index][key] = value;
    setFormData({
      ...formData,
      hargaTandaMasuk: updatedHargaTandaMasuk,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi minimal 1 baris tabel harus diisi
    const isAtLeastOneRowFilled = formData.hargaTandaMasuk.some(
      (row) => row.kelas.trim() !== "" || row.harga.trim() !== ""
    );

    if (!isAtLeastOneRowFilled) {
      alert("Harap isi minimal satu baris pada tabel Harga Tanda Masuk.");
      return;
    }

    console.log(formData); // Log data form untuk debugging
    navigate("/penilaian"); // Navigasi ke halaman "penilaian"
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>SPTPD Hiburan</h2>
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

          {/* Hiburan yang Diselenggarakan */}
          <div className="form-group">
            <label>Hiburan yang Diselenggarakan</label>
            <select
              name="hiburan"
              value={formData.hiburan}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Hiburan</option>
              <option value="Pertunjukan Film">01. Pertunjukan Film</option>
              <option value="Pertunjukan Kesenian">
                02. Pertunjukan Kesenian dan Sejenisnya
              </option>
              <option value="Pagelaran Musik dan Tari">
                03. Pagelaran Musik dan Tari
              </option>
              <option value="Diskotik">04. Diskotik</option>
              <option value="Karaoke">05. Karaoke</option>
              <option value="Klub Malam">06. Klub Malam</option>
              <option value="Permainan Bilyard">07. Permainan Bilyard</option>
              <option value="Permainan Ketangkasan">
                08. Permainan Ketangkasan
              </option>
              <option value="Panti Pijat">09. Panti Pijat</option>
              <option value="Mandi Uap">10. Mandi Uap</option>
              <option value="Pertandingan Olahraga">
                11. Pertandingan Olahraga
              </option>
              <option value="Hiburan Lainnya">12. Hiburan Lainnya</option>
            </select>
            {formData.hiburan === "Hiburan Lainnya" && (
              <input
                type="text"
                name="namaHiburanLainnya"
                value={formData.namaHiburanLainnya}
                onChange={handleChange}
                placeholder="Nama Hiburan Lainnya"
                required
              />
            )}
          </div>

          {/* Harga Tanda Masuk */}
          <div className="form-group">
            <label>Harga Tanda Masuk yang Berlaku</label>
            <table className="harga-tanda-masuk-table">
              <thead>
                <tr>
                  <th>Kelas</th>
                  <th>Rp</th>
                </tr>
              </thead>
              <tbody>
                {formData.hargaTandaMasuk.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        value={row.kelas}
                        onChange={(e) =>
                          handleTableChange(index, "kelas", e.target.value)
                        }
                        placeholder="Kelas"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={row.harga}
                        onChange={(e) =>
                          handleTableChange(index, "harga", e.target.value)
                        }
                        placeholder="Rp"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Jumlah Pertunjukan (khusus Pagelaran Musik dan Tari) */}
          {formData.hiburan === "Pagelaran Musik dan Tari" && (
            <>
              <div className="form-group">
                <label>
                  Jumlah Pertunjukan Rata-rata Hari Biasa (kali)
                  <input
                    type="number"
                    name="jumlahPertunjukanHariBiasaKali"
                    value={formData.jumlahPertunjukanHariBiasaKali}
                    onChange={handleChange}
                    placeholder="Kali"
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Jumlah Pertunjukan Rata-rata Hari Libur (kali)
                  <input
                    type="number"
                    name="jumlahPertunjukanHariLiburKali"
                    value={formData.jumlahPertunjukanHariLiburKali}
                    onChange={handleChange}
                    placeholder="Kali"
                  />
                </label>
              </div>
            </>
          )}

          {/* Jumlah Pengunjung */}
          <div className="form-group">
            <label>
              Jumlah Pengunjung Rata-rata Hari Biasa (orang)
              <input
                type="number"
                name="jumlahPengunjungHariBiasaOrang"
                value={formData.jumlahPengunjungHariBiasaOrang}
                onChange={handleChange}
                placeholder="Orang"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Jumlah Pengunjung Rata-rata Hari Libur (orang)
              <input
                type="number"
                name="jumlahPengunjungHariLiburOrang"
                value={formData.jumlahPengunjungHariLiburOrang}
                onChange={handleChange}
                placeholder="Orang"
              />
            </label>
          </div>

          {/* Jumlah Meja/Mesin (khusus Bilyard/Permainan Ketangkasan) */}
          {(formData.hiburan === "Permainan Bilyard" ||
            formData.hiburan === "Permainan Ketangkasan") && (
            <div className="form-group">
              <label>
                Jumlah Meja/Mesin (buah)
                <input
                  type="number"
                  name="jumlahMejaMesin"
                  value={formData.jumlahMejaMesin}
                  onChange={handleChange}
                  placeholder="Buah"
                />
              </label>
            </div>
          )}

          {/* Jumlah Kamar/Ruangan (khusus Panti Pijat/Mandi Uap/Karaoke) */}
          {(formData.hiburan === "Panti Pijat" ||
            formData.hiburan === "Mandi Uap" ||
            formData.hiburan === "Karaoke") && (
            <div className="form-group">
              <label>
                Jumlah Kamar/Ruangan (buah)
                <input
                  type="number"
                  name="jumlahKamarRuangan"
                  value={formData.jumlahKamarRuangan}
                  onChange={handleChange}
                  placeholder="Buah"
                />
              </label>
            </div>
          )}

          {/* Karcis Bebas */}
          <div className="form-group">
            <label>Pernyataan Menyediakan Karcis Bebas (Free)</label>
            <select
              name="karcisBebas"
              value={formData.karcisBebas}
              onChange={handleChange}
              required
            >
              <option value="">Pilih</option>
              <option value="Ya">Ya</option>
              <option value="Tidak">Tidak</option>
            </select>
            {formData.karcisBebas === "Ya" && (
              <input
                type="number"
                name="jumlahKarcisBebas"
                value={formData.jumlahKarcisBebas}
                onChange={handleChange}
                placeholder="Jumlah Karcis (buah)"
              />
            )}
          </div>

          {/* Penjualan Mesin Tiket */}
          <div className="form-group">
            <label>Penjualan Karcis Menggunakan Mesin Tiket</label>
            <select
              name="penjualanMesinTiket"
              value={formData.penjualanMesinTiket}
              onChange={handleChange}
              required
            >
              <option value="">Pilih</option>
              <option value="Ya">Ya</option>
              <option value="Tidak">Tidak</option>
            </select>
          </div>

          {/* Pembukuan/Pencatatan */}
          <div className="form-group">
            <label>Mengadakan Pembukuan/Pencatatan</label>
            <select
              name="melaksanakanPembukuan"
              value={formData.melaksanakanPembukuan}
              onChange={handleChange}
              required
            >
              <option value="">Pilih</option>
              <option value="Ya">Ya</option>
              <option value="Tidak">Tidak</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hiburan;
