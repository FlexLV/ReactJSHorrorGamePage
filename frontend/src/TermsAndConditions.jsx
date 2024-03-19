import './App.js';
import Navbar from './Components/Footer-Navbar/Navbar.jsx'; // Import Header once
import "./App.css"
import Footer from './Components/Footer-Navbar/Footer.js';
import TermsAndCondition from './Components/TermsAndConditions/Termsandconditions.jsx';

function TermsAndConditions (){
    return(
        <div>
        <Navbar />
        <TermsAndCondition />
        <Footer />
      </div>
    )
}


export default TermsAndConditions