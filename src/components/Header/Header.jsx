import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import menu from "../../images/menu_icon.svg";
import "./Header.css";

function Header({ isLogged }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header">
      <a href="/" className="link">
        <img src={logo} alt="Logo" className="header__logo" />
      </a>
      <button onClick={handleMenuClick} className="header__menu-button">
        <img className="header__menu-icon" src={menu} alt="menu button" />
      </button>
      <Navigation
        isLogged={isLogged}
        isMenuOpen={isMenuOpen}
        handleMenuClick={handleMenuClick}
      />
    </header>
  );
}

export default Header;
