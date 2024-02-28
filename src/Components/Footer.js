import React from 'react'
import { Button } from './Button'
import "./Footer.css"
import { Link } from 'react-router-dom';
import instaLogo from "./Assets/free-instagram-logo-icon-3497-thumb.png"
import twitterLogo from "./Assets/Twitter_bird_logo_black.svg.png"
import youtubeLogo from "./Assets/YouTube-icon-black-png.png"
import githubLogo from "./Assets/25231.png"

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join us to get news first!
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your email' className='footer-input'/>
                    <Button buttonStyle = "btn--outline" buttonSize="btn--medium">Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-wrapper'>
         <div className='footer-socials'>
            <div className='footer-social-items'>
                <a href='https://www.instagram.com/'><img src={instaLogo} alt='Instagram' /></a>
                <a href='https://www.twitter.com/'><img src={twitterLogo} alt='Twitter' /></a>
                <a href='https://github.com/FlexLV'><img src={githubLogo} alt='Github' /></a>
                <a href='https://www.twitter.com/'><img src={youtubeLogo} alt='Youtube' /></a>
            </div>
            </div>
            <div className='footer-links'>
                <div className='footer-link-items'>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/donwload">Download</Link>
                    <Link to="/forum">Forum</Link>
                </div>
            </div>
        </div>
        <div className="website-rights">
            <p>CopyRight © Ernests Dejus</p>
        </div>
    </div>
  )
}

export default Footer