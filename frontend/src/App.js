import React from 'react';
import Navbar from './Components/Footer-Navbar/Navbar.jsx';
import HeroSection from './Components/main-page-components/HeroSection.js';
import Cards from './Components/main-page-components/Cards.js';
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