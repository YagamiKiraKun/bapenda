import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Welcome from './components/pages/Welcome';
import ABT from './components/data/ABT';
import AirBawahTanah from './components/form/air-bawah-tanah';
import Penilaian from './components/pages/Penilaian';
import RegistrationForm from './components/pages/Register';
import Minerba from './components/form/minerba';
import PPJ from './components/form/ppj';
import Restoran from './components/form/restoran';
import Walet from './components/form/walet';
import Hotel from './components/form/hotel';

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
        <Route path="/home" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/data/ABT" element={<ABT />} />
        <Route path="/penilaian" element={<Penilaian />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );  
};

export default App;
