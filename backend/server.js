const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Tambahkan jika ingin mengakses API dari frontend
const bodyParser = require('body-parser'); // Untuk mem-parsing request body

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/registrasi'; // Ganti 'namaDatabase' dengan nama database kamu
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Schema dan Model (contoh sederhana)
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  namaUsaha: { type: String, required: true },
  jenisUsaha: { type: String, required: true },
  alamatUsaha: { type: String, required: true },
  nomorTeleponUsaha: { type: String, required: true },
  namaPemilik: { type: String, required: true },
  alamatPemilik: { type: String, required: true },
  nomorTeleponPemilik: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

// Route untuk Register
app.post('/register', async (req, res) => {
  try {
    const userData = req.body;

    // Validasi sederhana (opsional)
    if (userData.password !== userData.confirmPassword) {
      return res.status(400).json({ message: 'Password tidak cocok' });
    }

    // Simpan data ke database
    const newUser = new User(userData);
    await newUser.save();

    res.status(201).json({ message: 'User berhasil didaftarkan', data: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Terjadi kesalahan pada server', error: err });
  }
});

// Route Test (opsional)
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start Server
const PORT = 5002; // Pastikan port ini tidak digunakan oleh proses lain
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
