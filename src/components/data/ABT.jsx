/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from 'react';
import './ABT.css';
import Navbar from '../Navbar';
import { FaEye } from 'react-icons/fa';
import supabase from '../supabase'; // Import Supabase client
import { useNavigate } from 'react-router-dom';

const ABT = () => {
  const [data, setData] = useState([]); // State untuk data utama
  const [expandedRowNpwpd, setExpandedRowNpwpd] = useState(null); // Track NPWPD baris yang terbuka
  const navigate = useNavigate();

  // Fetch data dari tabel air_bawah_tanah
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data: airData, error } = await supabase
        .from('air_bawah_tanah')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        console.log('Fetched data:', airData);
        setData(airData); // Menyimpan data yang diambil ke state
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  // Fungsi untuk menangani klik ikon mata dan toggle tampilan detail
  const handleEyeClick = (npwpd) => {
    setExpandedRowNpwpd((prevNpwpd) => {
      const newNpwpd = prevNpwpd === npwpd ? null : npwpd;
      return newNpwpd;
    });
  };

  // Fungsi untuk membawa data ke halaman Cetak
  const handlePrintClick = (item) => {
    localStorage.setItem('npwpd', item.npwpd); // Menyimpan NPWPD di localStorage
    localStorage.setItem('dataAirBawahTanah', JSON.stringify(item)); // Menyimpan data lengkap
    navigate('/cetak'); // Mengarahkan ke halaman Cetak
  };

  return (
    <div>
      <Navbar />
      <div className="data-container">
        <h2>Daftar Data Masuk</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>NPWPD</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <React.Fragment key={item.npwpd}> {/* Gunakan npwpd sebagai key */}
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.nama}</td>
                    <td>{item.npwpd}</td>
                    <td>
                      <button className="eye-button" onClick={() => handleEyeClick(item.npwpd)}>
                        <FaEye className="icon" />
                      </button>
                    </td>
                  </tr>
                  {/* Baris Detail */}
                  {expandedRowNpwpd === item.npwpd && (
                    <tr className="detail-row">
                      <td colSpan={4}>
                        <div className="detail-message">
                          <p><strong>Jenis Air:</strong> {item.jenis_air}</p>
                          <p><strong>Debit:</strong> {item.debit}</p>
                          <p><strong>Lokasi Air:</strong> {item.lokasi_air}</p>
                          <p><strong>Tanggal:</strong> {item.tanggal}</p>
                          <p><strong>Alamat:</strong> {item.alamat}</p>
                          <p><strong>Created At:</strong> {item.created_at}</p>
                        </div>
                        {/* Tombol untuk pergi ke halaman Cetak */}
                        <div className="print-button-container">
                          <button onClick={() => handlePrintClick(item)} className="print-button">
                            🖨 Cetak Data
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan={4}>Tidak ada data yang tersedia</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ABT;
