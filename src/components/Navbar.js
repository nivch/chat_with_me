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
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/portfolio' className='navbar-logo' onClick={closeMobileMenu}>
            Nivina Christy
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/portfolio/Education'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Education
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/portfolio/WorkExperience'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Work Experience
              </Link>
            </li>

            
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;