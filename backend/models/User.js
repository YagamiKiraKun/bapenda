const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  namaUsaha: { type: String, required: true },
  jenisUsaha: { type: String, required: true },
  alamatUsaha: { type: String, required: true },
  nomorTeleponUsaha: { type: String, required: true },
  namaPemilik: { type: String, required: true },
  alamatPemilik: { type: String, required: true },
  nomorTeleponPemilik: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
