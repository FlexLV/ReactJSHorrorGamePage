import './App.js';
import Navbar from './Components/Footer-Navbar/Navbar.jsx'; // Import Header once
import "./App.css"
import Footer from './Components/Footer-Navbar/Footer.js';
import Foruming from './Components/Forum/Foruming.jsx';

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