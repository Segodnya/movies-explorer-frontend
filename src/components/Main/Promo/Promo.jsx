import React from "react";
import "./Promo.css";

const Promo = () => {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <ul className="list promo__list">
        <li>
          <a className="link promo__link" href="#about-project">
            О проекте
          </a>
        </li>
        <li>
          <a className="link promo__link" href="#techs">
            Технологии
          </a>
        </li>
        <li>
          <a className="link promo__link" href="#about-me">
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Promo;
