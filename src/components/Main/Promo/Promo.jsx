import React from 'react';
import './Promo.css';

const Promo = () => {
  return (
    <section className="promo">
      <h1 className="title">Учебный проект студента факультета Веб-разработки.</h1>
      <ul className="list">
        <li>
          <a className="link promo__link" href="#">
            О проекте
          </a>
        </li>
        <li>
          <a className="link promo__link" href="#">
            Технологии
          </a>
        </li>
        <li>
          <a className="link promo__link" href="#">
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Promo;
