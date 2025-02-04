import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase';
import './Cetak.css'; // Import file CSS terpisah
import logoDispenda from '../assets/logodispenda.png'; // Pastikan path benar

const CetakParkir = () => {
  const navigate = useNavigate();
  const [dataPenilaianParkir, setDataPenilaianParkir] = useState(null);
  const [dataParkir, setDataParkir] = useState(null);
  const [error, setError] = useState(null); // State untuk menangani error
  const npwpd = localStorage.getItem('npwpd');

  useEffect(() => {
    const fetchData = async () => {
      if (!npwpd) {
        setError('NPWPD tidak ditemukan di localStorage.');
        return;
      }

      try {
        // Ambil data penilaianparkir
        const { data: penilaianparkir, error: penilaianError } = await supabase
          .from('penilaianparkir')
          .select('*')
          .eq('npwpd', npwpd)
          .single();

        if (penilaianError) throw penilaianError;

        // Ambil data parkir
        const { data: parkir, error: parkirError } = await supabase
          .from('parkir')
          .select('*')
          .eq('npwpd', npwpd)
          .single();

        if (parkirError) throw parkirError;

        // Set data ke state
        setDataPenilaianParkir(penilaianparkir);
        setDataParkir(parkir);
      } catch (error) {
        console.error('Gagal mengambil data:', error.message);
        setError('Gagal mengambil data. Silakan coba lagi.');
      }
    };

    fetchData();
  }, [npwpd]);

  return (
    <div className="cetak-container">
      <div className="no-print">
        <Navbar />
      </div>

      <div className="print-container">
        <div className="print-only logo-container">
          <img src={logoDispenda} alt="Logo Dispenda" className="logo-dispenda" />
        </div>

        <h1 className="title">Lembar Data Wajib Pajak</h1>
        {error ? (
          <p className="error-message">❌ {error}</p>
        ) : dataPenilaianParkir && dataParkir ? (
          <div className="data-section">
            <h2 className="section-title">📌 Data Penilaian Parkir</h2>
            <table className="data-table">
              <tbody>
                {Object.entries(dataPenilaianParkir).map(([key, value]) => (
                  <tr key={key}>
                    <td className="data-label">{key.replace('_', ' ')}</td>
                    <td className="data-value">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 className="section-title">🚗 Data Parkir</h2>
            <table className="data-table">
  <tbody>
    {Object.entries(dataParkir).map(([key, value]) => (
      <tr key={key}>
        <td className="data-label">{key.replace('_', ' ')}</td>
        {/* Pastikan value diubah menjadi string jika berupa objek */}
        <td className="data-value">
          {typeof value === 'object' && value !== null
            ? JSON.stringify(value)
            : value}
        </td>
      </tr>
    ))}
  </tbody>
</table>

            <div className="no-print button-container">
              <button onClick={() => window.print()} className="print-button">🖨 Cetak Data</button>
            </div>
          </div>
        ) : (
          <p className="loading">📌 Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default CetakParkir;
