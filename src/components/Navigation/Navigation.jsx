import React from 'react';
import './Navigation.css';

function Navigation({ isMenuOpen, handleMenuClick }) {
  return (
    <nav className={`navigation ${isMenuOpen ? 'navigation_open' : ''}`}>
      <button onClick={handleMenuClick} className="navigation__close"></button>
      <a href="/signup" className="link navigation__link navigation__link_type_normal">
        Регистрация
      </a>
      <a href="/signin" className={`link navigation__link navigation__link_type_highlighted ${isMenuOpen ? 'navigation__link_type_highlighted_open' : ''}`}>
        Войти
      </a>
    </nav>
  );
}

export default Navigation;
