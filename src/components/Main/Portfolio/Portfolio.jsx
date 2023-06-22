import React from "react";
import "./Portfolio.css";

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
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
