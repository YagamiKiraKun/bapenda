import React from 'react';
import { useParams } from 'react-router-dom';
import './Data.css';

const DataPage = () => {
  const { category } = useParams();  // Mengambil parameter kategori dari URL

  const data = {
    'air-bawah-tanah': [
      { id: 1, name: 'Source A', value: '500' },
      { id: 2, name: 'Source B', value: '300' },
      { id: 3, name: 'Source C', value: '450' },
    ],
    'minerba': [
      { id: 1, name: 'Mineral A', value: '200' },
      { id: 2, name: 'Mineral B', value: '150' },
    ],
    'ppj': [
      { id: 1, name: 'PPJ A', value: '100' },
      { id: 2, name: 'PPJ B', value: '50' },
    ],
    // Tambahkan data lainnya sesuai kategori yang ada
  };

  const categoryData = data[category] || [];  // Ambil data berdasarkan kategori

  return (
    <div className="data-page-container">
      <h1 className="data-title">Data for {category.replace('-', ' ')}</h1>
      {categoryData.length > 0 ? (
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {categoryData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="data-empty">No data available for this category.</div>
      )}
    </div>
  );
};

export default DataPage;
