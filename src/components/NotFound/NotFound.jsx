import React from 'react';
import './NotFound.css';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <NavLink to="/" className="link not-found__link">
        Назад
      </NavLink>
    </main>
  );
};

export default NotFound;
