import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Welcome from './components/pages/Welcome';
import ABT from './components/data/ABT';
import MinerbaAdmin from './components/data/MinerbaAdmin';
import AirBawahTanah from './components/form/air-bawah-tanah';
import Penilaian from './components/pages/Penilaian';
import PenilaianMinerba from './components/pages/PenilaianMinerba';
import PenilaianParkir from './components/pages/PenilaianParkir';
import PenilaianPPJ from './components/pages/PenilaianPPJ';
import RegistrationForm from './components/pages/Register';
import Minerba from './components/form/minerba';
import PPJ from './components/form/ppj';
import Restoran from './components/form/restoran';
import Walet from './components/form/walet';
import Hotel from './components/form/hotel';
import Parkir from './components/form/parkir';
import Hiburan from './components/form/hiburan';
import Reklame from './components/form/reklame';
import Cetak from './components/pages/Cetak';
import CetakMinerba from './components/pages/CetakMinerba';
import CetakParkir from './components/pages/CetakParkir';
import CetakPPJ from './components/pages/CetakPPJ';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Route utama */}
        <Route path="/login" element={<Login />} /> {/* Pastikan route login ada */}
        <Route path="/form/air-bawah-tanah" element={<AirBawahTanah />} />
        <Route path="/form/minerba" element={<Minerba />} />
        <Route path="/form/ppj" element={<PPJ />} />
        <Route path="/form/restoran" element={<Restoran />} />
        <Route path="/form/walet" element={<Walet />} />
        <Route path="/form/hotel" element={<Hotel />} />
        <Route path="/form/parkir" element={<Parkir />} />
        <Route path="/form/hiburan" element={<Hiburan />} />
        <Route path="/form/reklame" element={<Reklame />} />
        <Route path="/home" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/data/ABT" element={<ABT />} />
        <Route path="/data/minerba" element={<MinerbaAdmin />} />
        <Route path="/penilaian" element={<Penilaian />} />
        <Route path="/penilaianparkir" element={<PenilaianParkir />} />
        <Route path="/penilaianminerba" element={<PenilaianMinerba />} />
        <Route path="/penilaianppj" element={<PenilaianPPJ />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/cetak" element={<Cetak />} />
        <Route path="/cetakminerba" element={<CetakMinerba />} />
        <Route path="/cetakparkir" element={<CetakParkir />} />
        <Route path="/cetakppj" element={<CetakPPJ />} />
      </Routes>
    </Router>
  );  
};

export default App;
