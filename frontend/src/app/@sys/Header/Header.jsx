import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);
    const showButton = () => {
      if(window.innerWidth <= 960){
        setButton(false);
      }else{
        setButton(true);
      }
    };
  
    useEffect (() => {
      showButton();
      }, []);
  
    window.addEventListener('resize',showButton);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
        <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            SET <i className='fab fa-typo3'/></Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times':'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Dashboard
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                Sign Up
                </Link>
              </li>
            </ul>
            {/* {button && <Button buttonStyle='btn-outline'>SIGN UP</Button>} */}
        </div>
    </nav>
    </> 
  )
}

export default Header

