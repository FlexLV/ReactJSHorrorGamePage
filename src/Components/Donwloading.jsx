
import "./Donwloading.css";

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

                </div>
            </div>
        </div>
    );
}



export default Donwloading