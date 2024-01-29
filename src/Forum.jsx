import './App.js';
import Navbar from './Components/Navbar.jsx'; // Import Header once
import "./App.css"
import Footer from './Components/Footer.js';
import Foruming from './Components/Foruming.jsx';

function Forum (){
    return(
        <div>
        <Navbar />
        <Foruming />
        <Footer />
      </div>
    )
}


export default Forum