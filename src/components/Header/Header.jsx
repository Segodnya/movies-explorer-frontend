import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="site logo" className="header__logo" />
      </a>
      <Navigation />
    </header>
  );
};

export default Header;
