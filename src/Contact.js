import './App.js';
import Navbar from './Components/Footer-Navbar/Navbar.jsx'; // Import Header once
import "./App.css"
import Footer from './Components/Footer-Navbar/Footer.js';
import Contacting from './Components/Contacting/Contacting.js';


function Contact() {
  return (
    <div>
      <Navbar />
      <Contacting />
      <Footer />
    </div>
  );
}

export default Contact