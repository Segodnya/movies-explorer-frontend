import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul className="list navigation">
        <li>
          <a className="link navigation__link navigation__link_type_normal" href="/signup">
            Регистрация
          </a>
        </li>
        <li>
          <a className="link navigation__link navigation__link_type_highlighted" href="/signin">
            Войти
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
