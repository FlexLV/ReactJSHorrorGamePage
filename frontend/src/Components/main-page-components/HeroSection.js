import React from 'react';
import { Button } from "../ElementComponaments/Button";
import "./HeroSection.css";


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/images/fantasy_-_119266 (Original).mp4" autoPlay loop muted />
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
  )
}

export default HeroSection