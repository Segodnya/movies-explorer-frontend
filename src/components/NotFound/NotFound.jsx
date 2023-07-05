import React from 'react';
import './NotFound.css';
import { NavLink, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-2);
  };

  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <NavLink to="#" className="link not-found__link" onClick={handleClick}>
        Назад
      </NavLink>
    </main>
  );
};

export default NotFound;
