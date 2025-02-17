/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase';
import './Cetak.css'; // Import file CSS terpisah
import logoDispenda from '../assets/logodispenda.png'; // Pastikan path benar

const Cetak = () => {
  const navigate = useNavigate();
  const [dataPenilaian, setDataPenilaian] = useState(null);
  const [dataAirBawahTanah, setDataAirBawahTanah] = useState(null);
  const npwpd = localStorage.getItem('npwpd');

  useEffect(() => {
    const fetchData = async () => {
      if (!npwpd) {
        console.error('NPWPD tidak ditemukan di localStorage');
        return;
      }

      try {
        const { data: penilaian } = await supabase
          .from('penilaian')
          .select('*')
          .eq('npwpd', npwpd)
          .single();

        setDataPenilaian(penilaian);

        const { data: airBawahTanah } = await supabase
          .from('air_bawah_tanah')
          .select('*')
          .eq('npwpd', npwpd)
          .single();

        setDataAirBawahTanah(airBawahTanah);
      } catch (error) {
        console.error('Gagal mengambil data:', error.message);
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
        {dataPenilaian && dataAirBawahTanah ? (
          <div className="data-section">
            <h2 className="section-title">📌 Data Penilaian</h2>
            <table className="data-table">
              <tbody>
                {Object.entries(dataPenilaian).map(([key, value]) => (
                  <tr key={key}>
                    <td className="data-label">{key.replace('_', ' ')}</td>
                    <td className="data-value">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 className="section-title">💧 Data Air Bawah Tanah</h2>
            <table className="data-table">
              <tbody>
                {Object.entries(dataAirBawahTanah).map(([key, value]) => (
                  <tr key={key}>
                    <td className="data-label">{key.replace('_', ' ')}</td>
                    <td className="data-value">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="no-print button-container">
              <button onClick={() => window.print()} className="print-button">🖨 Print</button>
            </div>
          </div>
        ) : (
          <p className="loading">📌 Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Cetak;
