import React from 'react';
import './Navigation.css';
import account from '../../images/account.svg';
import { NavLink } from 'react-router-dom';

function Navigation({ isMenuOpen, handleMenuClick }) {
  return (
    <nav className={`navigation navigation_centered ${isMenuOpen ? 'navigation_open' : ''} `}>
      <button onClick={handleMenuClick} className="navigation__close" type="button"></button>

      <div className={`navigation__links ${isMenuOpen ? '' : 'navigation__links_centered'}`}>
        {isMenuOpen && (
          <NavLink to="/" className={`link navigation__link navigation__link_type_normal ${isMenuOpen ? 'navigation__link_type_highlighted-open' : ''}`}>
            Главная
          </NavLink>
        )}
        <NavLink to="/movies" className={`link navigation__link navigation__link_type_normal ${isMenuOpen ? 'navigation__link_type_highlighted-open' : ''}`}>
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className={`link navigation__link navigation__link_type_normal ${isMenuOpen ? 'navigation__link_type_normal_open' : ''}`}>
          Сохраненные фильмы
        </NavLink>
      </div>

      <NavLink to="/profile" className={`link navigation__link  navigation__link_type_normal ${isMenuOpen ? 'navigation__link_type_normal_open' : ''} navigation__link_cornered`}>
        Аккаунт
        <img className="navigation__pic" src={account} alt="иконка головы человека" />
      </NavLink>
    </nav>
  );
}

export default Navigation;
