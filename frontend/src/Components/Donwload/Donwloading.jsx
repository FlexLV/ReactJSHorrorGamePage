import animatingBlood from "..//Assets/Animation - 1709116367969.json"
import "./Donwloading.css";
import Lottie from "react-lottie";

function Donwloading(){
    const handleDownload = () => {
        // Example: downloading a text file
        const fileData = "Game not ready yet!";
        const blob = new Blob([fileData], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
    
        const link = document.createElement('a');
        link.href = url;
        link.download = 'example.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      };
    return(
        <div className="donwloading-container">
            <img src={require("../Assets/Outlast2_WindMill-1920x1080.jpg")} alt="" className="background-image" />
            <div className="donwloading-wraper">
                <div className="donwload-part">
                    <span className="drop"></span>
                    <span className="drop"></span>
                    <span className="drop"></span>
                    <span className="drop"></span>
                    <span className="drop"></span>
                    <span className="drop"></span>
                    <span className="drop"></span>
                    <h1 className="message">Begin Your Nightmare</h1>
                    <button onClick={handleDownload}>DONWLOAD NOW</button>
                    <div className="watersplash"></div>
                    <span  className="wave"></span>
                    <span className="wave"></span>
                    <div className="animating-blood">
                        <Lottie 
                            options={{ animationData: animatingBlood, loop: true, autoplay: true }} 
                            isClickToPauseDisabled={true}
                            style={{ width: '100%', height: 'auto' }} // Adjusts width, auto-adjusts height
                        />
                    </div>                
                </div>
                
            </div>
            
        </div>
    );
}



export default Donwloading