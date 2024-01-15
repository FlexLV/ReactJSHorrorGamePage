import React from 'react'
import { Button } from './Button'
import "./Footer.css"
import { Link } from 'react-router-dom';

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
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to="/contact">Contact</Link>
                    <Link to="/Donwload">Donwload</Link>
                    <Link to="/Login">Login/Register</Link>
                    <Link to="/Login">Login/Register</Link>
                    <Link to="/Login">Login/Register</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to="/contact">Contact</Link>
                    <Link to="/Donwload">Donwload</Link>
                    <Link to="/Login">Login/Register</Link>
                    <Link to="/Login">Login/Register</Link>
                    <Link to="/Login">Login/Register</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to="/contact">Contact</Link>
                    <Link to="/Donwload">Donwload</Link>
                    <Link to="/Login">Login/Register</Link>
                    <Link to="/Login">Login/Register</Link>
                    <Link to="/Login">Login/Register</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to="/contact">Contact</Link>
                    <Link to="/Donwload">Donwload</Link>
                    <Link to="/Login">Login/Register</Link>
                    <Link to="/Login">Login/Register</Link>
                    <Link to="/Login">Login/Register</Link>
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