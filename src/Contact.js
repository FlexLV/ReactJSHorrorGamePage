import './App.js';
import Navbar from './Components/Navbar.jsx'; // Import Header once
import "./App.css"
import Footer from './Components/Footer.js';
import Contacting from './Components/Contacting.js';


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