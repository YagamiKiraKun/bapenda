import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase';

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
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f4f4f4' }}>
      <div className="print-container">
        <h1 style={{ textAlign: 'center', color: '#333' }}>Cetak Data Wajib Pajak</h1>
        <p style={{ textAlign: 'center', color: '#666' }}>Anda login sebagai Wajib Pajak, Silahkan pilih Kategori Pajak</p>

        {dataPenilaian && dataAirBawahTanah ? (
          <div style={{ marginTop: '20px' }}>
            <h2 style={{ color: '#444', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>📌 Data Penilaian</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
              <tbody>
                {Object.entries(dataPenilaian).map(([key, value]) => (
                  <tr key={key} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px', fontWeight: 'bold', color: '#555', textTransform: 'capitalize' }}>
                      {key.replace('_', ' ')}
                    </td>
                    <td style={{ padding: '8px', color: '#333' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 style={{ color: '#444', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>💧 Data Air Bawah Tanah</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
              <tbody>
                {Object.entries(dataAirBawahTanah).map(([key, value]) => (
                  <tr key={key} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px', fontWeight: 'bold', color: '#555', textTransform: 'capitalize' }}>
                      {key.replace('_', ' ')}
                    </td>
                    <td style={{ padding: '8px', color: '#333' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="no-print" style={{ textAlign: 'right' }}>
              <button 
                onClick={() => window.print()} 
                style={{
                  background: '#007bff',
                  color: 'white',
                  padding: '10px 15px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                🖨 Cetak Data
              </button>
            </div>
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: '#666', marginTop: '20px' }}>📌 Loading data...</p>
        )}
      </div>

      {/* CSS untuk menyembunyikan elemen saat dicetak */}
      <style>
        {`
          @media print {
            .no-print {
              display: none !important;
            }
            .print-container {
              background: white !important;
              color: black !important;
              padding: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Cetak;
