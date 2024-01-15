import React, { useEffect } from 'react'; // Import useEffect
import Navbar from './Components/Navbar.jsx';
import HeroSection from './Components/HeroSection.js';
import Cards from './Components/Cards.js';
import Footer from './Components/Footer.js';

function App({ onLoad }) { // Receive onLoad as a prop
  useEffect(() => {
    // Simulate data fetching or any initialization logic
    // Replace this with your actual data fetching logic
    new Promise((resolve) => {
      setTimeout(resolve, 2000); // Simulated delay
    }).then(() => {
      if (onLoad) onLoad(); // Notify that loading is complete
    });
  }, [onLoad]);

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