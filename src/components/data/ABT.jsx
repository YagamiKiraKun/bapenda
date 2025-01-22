import React, { useState } from 'react';
import './ABT.css';
import Navbar from '../Navbar';
import { FaEye } from 'react-icons/fa'; // Menggunakan FaEye dari react-icons

const ABT = () => {
  // Data statis yang akan ditampilkan
  const initialData = [
    { id: 1, nama: 'Contoh Nama 1', tanggal: '2025-01-05', detail: false },
    { id: 2, nama: 'Contoh Nama 2', tanggal: '2025-01-04', detail: false },
    { id: 3, nama: 'Contoh Nama 3', tanggal: '2025-01-03', detail: false },
    { id: 4, nama: 'Contoh Nama 4', tanggal: '2025-01-02', detail: false },
  ];

  // State untuk menyimpan data
  const [data, setData] = useState(initialData);

  // Fungsi untuk menangani klik pada ikon mata dan mengubah detail
  const handleEyeClick = (id) => {
    // Update data berdasarkan id, toggle nilai detail (false ke true atau sebaliknya)
    const updatedData = data.map(item => {
      if (item.id === id) {
        return { ...item, detail: !item.detail }; // Toggle status detail
      }
      return item;
    });

    setData(updatedData); // Update state dengan data yang sudah diubah
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
              <th>Tanggal Masuk</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nama}</td>
                <td>{item.tanggal}</td>
                <td>
                  {/* Ikon mata untuk setiap item */}
                  <button className="eye-button" onClick={() => handleEyeClick(item.id)}>
                    <FaEye className="icon" />
                  </button>
                  {/* Jika detail aktif, tampilkan pesan "Pajak mengalami kenaikan" */}
                  {item.detail && <span className="detail-message">Pajak mengalami kenaikan</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ABT;
