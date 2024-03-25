import React, { useState, useEffect } from 'react';
import { Button } from "../ElementComponaments/Button";
import axios from 'axios'; // Import Axios for making HTTP requests
import "./HeroSection.css";

function HeroSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend API when the component mounts
    fetchData();
  }, []); // Empty dependency array to execute only once

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3017/api/data');
      setData(response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Error response from server:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from server:', error.request);
      } else {
        // Something else happened while setting up the request
        console.error('Error setting up the request:', error.message);
      }
    }
  };
  

  return (
    <div className='hero-container'>
        <video src="./images/fantasy_-_119266 (Original).mp4" autoPlay loop muted />
        <h1>Ethernal Nightmares</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button
            link="/download"
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            >Play Now</Button>
            <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            >WATCH TRAILER <i className='far fa-play-circle' /></Button>
        
        </div>
    </div>
  );
}

export default HeroSection;
