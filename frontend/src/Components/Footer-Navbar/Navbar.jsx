import React, { useState, useEffect } from 'react';
import { Button } from '../ElementComponaments/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', showButton);
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='/images/Logo.png' alt='Logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/forum' className='nav-links' onClick={closeMobileMenu}>
                Forum
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/download' className='nav-links' onClick={closeMobileMenu}>
                Download
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            {!button && (
              <li className='nav-item' onClick={closeMobileMenu}>
                <Link to='/login' className='nav-links-mobile'>
                  Login/Register
                </Link>
              </li>
            )}
          </ul>
          {button && (
            <Button
              link="/login"
              buttonStyle='btn--outline'
              buttonSize="btn--medium"
            >
              Login/Register
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
