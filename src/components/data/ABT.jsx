import React from 'react';
import './ABT.css';
import Navbar from '../Navbar';

const ABT = () => {
  // Data statis yang akan ditampilkan
  const data = [
    { id: 1, nama: 'Contoh Nama 1', tanggal: '2025-01-05', status: 'Pending' },
    { id: 2, nama: 'Contoh Nama 2', tanggal: '2025-01-04', status: 'Selesai' },
    { id: 3, nama: 'Contoh Nama 3', tanggal: '2025-01-03', status: 'Pending' },
    { id: 4, nama: 'Contoh Nama 4', tanggal: '2025-01-02', status: 'Selesai' },
  ];

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
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.nama}</td>
              <td>{item.tanggal}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ABT;
