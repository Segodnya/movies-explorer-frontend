import React from 'react';
import './Portfolio.css';
import arrow from '../../../images/nav-arrow.svg';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="list portfolio__list">
        <li className="portfolio__item">
          <a href="https://segodnya.github.io/how-to-learn/" className="link portfolio__link">
            Статичный сайт
            <img src={arrow} alt="navigation arrow" className="portfolio__icon" />
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://segodnya.github.io/russian-travel/" className="link portfolio__link">
            Адаптивный сайт
            <img src={arrow} alt="navigation arrow" className="portfolio__icon" />
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/Segodnya/react-mesto-auth" className="link portfolio__link">
            Одностраничное приложение
            <img src={arrow} alt="navigation arrow" className="portfolio__icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
