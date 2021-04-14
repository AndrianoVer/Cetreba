import React from 'react';
import './Header.css';
import logo from '../img/Logo Cetreba Black.svg';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function Header() {
  return (
    <>
      <div className="page">
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
                  <ul className='nav-list'>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/our-team'>Our team</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contacts'>Contact</Link></li>							
                  </ul>					
                </nav>
              </Router>            
            </div>
          </header>          
        </div>        
      </div>
    </>
  );
}

export default Header;