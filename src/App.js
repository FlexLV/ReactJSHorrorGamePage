import React from 'react';
import Navbar from './Components/Footer-Navbar/Navbar.jsx';
import HeroSection from './Components/MainPage-Componaments/HeroSection.js';
import Cards from './Components/MainPage-Componaments/Cards.js';
import Footer from './Components/Footer-Navbar/Footer.js';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;