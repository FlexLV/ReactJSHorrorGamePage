import './App.js';
import Navbar from './Components/Footer-Navbar/Navbar.jsx'; // Import Header once
import "./App.css"
import Footer from './Components/Footer-Navbar/Footer.js';
import Donwloading from './Components/Donwload/Donwloading.jsx';

function Donwload (){
    return(
        <div>
        <Navbar />
        <Donwloading />
        <Footer />
      </div>
    )
}


export default Donwload