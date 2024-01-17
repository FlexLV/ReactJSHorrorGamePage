import './App.js';
import Navbar from './Components/Navbar.jsx'; // Import Header once
import "./App.css"
import Footer from './Components/Footer.js';
import Donwloading from './Components/Donwloading.jsx';

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