import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Oneshow from './components/Oneshow';
import Thank_you from './components/Thank_you';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Oneshow />} />
        <Route path="/submission-successfully" element={<Thank_you />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <InfoSection/>
       <Footer/>
    </>
  );
}

export default App;
