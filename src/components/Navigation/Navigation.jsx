import React from "react";
import "./Navigation.css";
import account from "../../images/account.svg";

function Navigation({ isMenuOpen, handleMenuClick }) {
  return (
    <nav
      className={`navigation navigation_centered ${
        isMenuOpen ? "navigation_open" : ""
      } `}
    >
      <button onClick={handleMenuClick} className="navigation__close"></button>

      <div
        className={`navigation__links ${
          isMenuOpen ? "" : "navigation__links_centered"
        }`}
      >
        {isMenuOpen && (
          <a
            href="/"
            className={`link navigation__link navigation__link_type_normal ${
              isMenuOpen ? "navigation__link_type_highlighted-open" : ""
            }`}
          >
            Главная
          </a>
        )}
        <a
          href="/movies"
          className={`link navigation__link navigation__link_type_normal ${
            isMenuOpen ? "navigation__link_type_highlighted-open" : ""
          }`}
        >
          Фильмы
        </a>
        <a
          href="/saved-movies"
          className={`link navigation__link navigation__link_type_normal ${
            isMenuOpen ? "navigation__link_type_normal_open" : ""
          }`}
        >
          Сохраненные фильмы
        </a>
      </div>

      <a
        href="/profile"
        className={`link navigation__link  navigation__link_type_normal ${
          isMenuOpen ? "navigation__link_type_normal_open" : ""
        } navigation__link_cornered`}
      >
        Аккаунт
        <img className="navigation__pic" src={account} alt="account pic" />
      </a>
    </nav>
  );
}

export default Navigation;
