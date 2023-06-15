import React from 'react';
import './Techs.css';

const Techs = () => {
  return (
    <section className="section techs">
      <h2 className="title-outlined">Технологии</h2>
      <h3 className="title techs__title">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="list techs__list">
        <li>
          <a className="link techs__link" href="#">
            HTML
          </a>
        </li>
        <li>
          <a className="link techs__link" href="#">
            CSS
          </a>
        </li>
        <li>
          <a className="link techs__link" href="#">
            JS
          </a>
        </li>
        <li>
          <a className="link techs__link" href="#">
            React
          </a>
        </li>
        <li>
          <a className="link techs__link" href="#">
            Git
          </a>
        </li>
        <li>
          <a className="link techs__link" href="#">
            Express.js
          </a>
        </li>
        <li>
          <a className="link techs__link" href="#">
            MongoDB
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Techs;
