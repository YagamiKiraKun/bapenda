import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase';
import './Cetak.css'; // Import file CSS terpisah
import logoDispenda from '../assets/logodispenda.png'; // Pastikan path benar

const CetakMinerba = () => {
  const navigate = useNavigate();
  const [dataPenilaianMinerba, setDataPenilaianMinerba] = useState(null);
  const [dataMinerba, setDataMinerba] = useState(null);
  const [error, setError] = useState(null); // State untuk menangani error
  const npwpd = localStorage.getItem('npwpd');

  useEffect(() => {
    const fetchData = async () => {
      if (!npwpd) {
        setError('NPWPD tidak ditemukan di localStorage');
        return;
      }

      try {
        // Ambil data dari tabel 'penilaianminerba'
        const { data: penilaianMinerba, error: penilaianError } = await supabase
          .from('penilaianminerba')
          .select('*')
          .eq('npwpd', npwpd)
          .single();

        if (penilaianError) throw penilaianError;
        setDataPenilaianMinerba(penilaianMinerba);

        // Ambil data dari tabel 'minerba'
        const { data: minerba, error: minerbaError } = await supabase
          .from('minerba') // Pastikan nama tabel sesuai di Supabase
          .select('*')
          .eq('npwpd', npwpd)
          .single();

        if (minerbaError) throw minerbaError;
        setDataMinerba(minerba);
      } catch (error) {
        console.error('Gagal mengambil data:', error.message);
        setError('Gagal mengambil data. Silakan coba lagi.');
      }
    };

    fetchData();
  }, [npwpd]);

  return (
    <div className="cetak-container">
      {/* Navbar hanya untuk tampilan, tidak ikut cetak */}
      <div className="no-print">
        <Navbar />
      </div>

      <div className="print-container">
        {/* Logo hanya muncul saat dicetak */}
        <div className="print-only logo-container">
          <img src={logoDispenda} alt="Logo Dispenda" className="logo-dispenda" />
        </div>

        <h1 className="title">Lembar Data Wajib Pajak</h1>
        {error ? (
          <p className="error">❌ {error}</p>
        ) : dataPenilaianMinerba && dataMinerba ? (
          <div className="data-section">
            <h2 className="section-title">📌 Data Penilaian</h2>
            <table className="data-table">
              <tbody>
                {Object.entries(dataPenilaianMinerba).map(([key, value]) => (
                  <tr key={key}>
                    <td className="data-label">{key.replace(/_/g, ' ')}</td>
                    <td className="data-value">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 className="section-title">Data Minerba</h2>
            <table className="data-table">
              <tbody>
                {Object.entries(dataMinerba).map(([key, value]) => (
                  <tr key={key}>
                    <td className="data-label">{key.replace(/_/g, ' ')}</td>
                    <td className="data-value">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="no-print button-container">
              <button onClick={() => window.print()} className="print-button">
                🖨 Cetak Data
              </button>
            </div>
          </div>
        ) : (
          <p className="loading">📌 Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default CetakMinerba;