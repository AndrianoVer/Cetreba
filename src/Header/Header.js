import React from 'react';
import './Header.css';
import logo from '../img/Logo Cetreba Black.svg';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function Header() {
  return (
    <>
      <div className="container-xl">
        <header className='site-header'>
          <div className='header-content-wrapper'>
            <div className='logo-box'>
              <a href='index.html' className='logo'>
                <img className='logo-svg' src={logo} alt='logo' />						
              </a>
            </div>
            <Router>              
              <nav className='site-navigation'>
              <input type="checkbox" id="menu-toggle" />
              <label id="trigger" for="menu-toggle"></label>
              <label id="burger" for="menu-toggle"></label>
                <ul className='nav-list'>
                  <li><Link to='/'>About</Link></li>
                  <li><Link to='/products'>Products</Link></li>
                  <li><Link to='/blog'>Blog</Link></li>
                  <li><Link to='/contacts'>Contact</Link></li>
                  <li className="basket-box">
                    <a href="#.php">
                      <span className="basket-logo" alt='basket-logo'></span>
                    </a>
                  </li>
                  <li className="search-box">
                    <a href="#.php">
                      <span className="search-logo" alt='search-logo'></span>
                    </a>
                  </li>								
                </ul>					
              </nav>
            </Router>            
          </div>
        </header>          
      </div>
    </>
  );
}

export default Header;