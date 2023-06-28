import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import menu from "../../images/menu_icon.svg";
import "./Header.css";

function Header({ isLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header">
      <a href="/" className="link logo">
        <img src={logo} alt="логотип сайта" />
      </a>

      {isLoggedIn ? (
        <>
          <button
            onClick={handleMenuClick}
            className="header__menu-button"
            type="button"
          >
            <img
              className="header__menu-icon"
              src={menu}
              alt="кнопка вызова меню"
            />
          </button>
          <Navigation
            isMenuOpen={isMenuOpen}
            handleMenuClick={handleMenuClick}
          />
        </>
      ) : (
        <nav className={`navigation-alwayson`}>
          <Link
            to="/signup"
            className="link navigation-alwayson__link navigation-alwayson__link_type_normal"
          >
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="link navigation-alwayson__link navigation-alwayson__link_type_highlighted"
          >
            Войти
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
