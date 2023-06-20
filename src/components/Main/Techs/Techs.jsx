import React from "react";
import "./Techs.css";

const Techs = () => {
  return (
    <section className="section techs" id="techs">
      <h2 className="title-outlined">Технологии</h2>
      <h3 className="title techs__title">7 технологий</h3>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="list techs__list">
        <li>
          <a
            className="link techs__link"
            href="https://ru.wikipedia.org/wiki/HTML"
            target="_blank"
            rel="noreferrer"
          >
            HTML
          </a>
        </li>
        <li>
          <a
            className="link techs__link"
            href="https://ru.wikipedia.org/wiki/CSS"
            target="_blank"
            rel="noreferrer"
          >
            CSS
          </a>
        </li>
        <li>
          <a
            className="link techs__link"
            href="https://learn.javascript.ru/"
            target="_blank"
            rel="noreferrer"
          >
            JS
          </a>
        </li>
        <li>
          <a
            className="link techs__link"
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
          >
            React
          </a>
        </li>
        <li>
          <a
            className="link techs__link"
            href="https://git-scm.com/"
            target="_blank"
            rel="noreferrer"
          >
            Git
          </a>
        </li>
        <li>
          <a
            className="link techs__link"
            href="https://expressjs.com/ru"
            target="_blank"
            rel="noreferrer"
          >
            Express.js
          </a>
        </li>
        <li>
          <a
            className="link techs__link"
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noreferrer"
          >
            MongoDB
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Techs;
