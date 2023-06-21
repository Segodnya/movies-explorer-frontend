import React from "react";
import "./Navigation.css";
import account from "../../images/account.svg";

function Navigation({ isLogged, isMenuOpen, handleMenuClick }) {
  return (
    <nav
      className={`navigation ${isLogged ? "navigation_centered" : ""} ${
        isMenuOpen ? "navigation_open" : ""
      } `}
    >
      <button onClick={handleMenuClick} className="navigation__close"></button>
      {!isLogged && (
        <a
          href="/signup"
          className="link navigation__link navigation__link_type_normal"
        >
          Регистрация
        </a>
      )}
      {!isLogged && (
        <a
          href="/signin"
          className={`link navigation__link navigation__link_type_highlighted ${
            isMenuOpen ? "navigation__link_type_highlighted_open" : ""
          }`}
        >
          Войти
        </a>
      )}
      {isLogged && (
        <div className={`${isMenuOpen ? "" : "navigation__links_centered"}`}>
          {isMenuOpen && (
            <a
              href="/"
              className={`link navigation__link navigation__link_type_normal ${
                isMenuOpen ? "navigation__link_type_highlighted_open" : ""
              }`}
            >
              Главная
            </a>
          )}
          <a
            href="/movies"
            className={`link navigation__link navigation__link_type_normal ${
              isMenuOpen ? "navigation__link_type_highlighted_open" : ""
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
      )}

      {isLogged && (
        <a
          href="/profile"
          className={`link navigation__link  navigation__link_type_normal ${
            isMenuOpen ? "navigation__link_type_normal_open" : ""
          } navigation__link_cornered`}
        >
          Аккаунт
          <img className="navigation__pic" src={account} alt="account pic" />
        </a>
      )}
    </nav>
  );
}

export default Navigation;
