import React from "react";
import "./Portfolio.css";
import arrow from "../../../images/nav-arrow.svg";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="list portfolio__list">
        <li className="portfolio__item">
          <a
            href="https://segodnya.github.io/how-to-learn/"
            className="link portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <img
              src={arrow}
              alt="кнопка-ссылка в виде стрелки"
              className="portfolio__icon"
            />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://segodnya.github.io/russian-travel/"
            className="link portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <img
              src={arrow}
              alt="кнопка-ссылка в виде стрелки"
              className="portfolio__icon"
            />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/Segodnya/react-mesto-auth"
            className="link portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <img
              src={arrow}
              alt="кнопка-ссылка в виде стрелки"
              className="portfolio__icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
