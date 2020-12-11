import React, { useState, useEffect } from 'react';
import { Button } from './Button';
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
    } 
    else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  {/*CHANGE HOME LINKS when getting custom domain. Will only work with .github.io. (/namtruong to / for logo and home)*/}
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/namtruong' className='navbar-logo' onClick={closeMobileMenu}>
            NT
            {/*<i class='fab fa-typo3' />*/}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/namtruong' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to='/resume' className='nav-links-mobile' onClick={closeMobileMenu}>
                Resume
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>RESUME</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;