import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Why from './pages/Why';
import Contact from './pages/Contact';
import Socials from './pages/Socials';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/why" element={<Why />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/socials" element={<Socials />} />
  </Routes>
);

export default App;
