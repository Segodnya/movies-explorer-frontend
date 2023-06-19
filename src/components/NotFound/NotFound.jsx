import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <a href="/" className="link not-found__link">
        Назад
      </a>
    </section>
  );
};

export default NotFound;