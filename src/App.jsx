import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header-nav/Header';
import Home from './Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Menu from './pages/Menu/Menu';
import Galeria from './components/Galeria';
import Reservations from './pages/Reservations/Reservations';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menú" element={<Menu />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/Reservations" element={<Reservations />} />
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
