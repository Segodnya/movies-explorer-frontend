import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__info">
        <p className="footer_copyright">
          &copy; {`${new Date().getFullYear()}`}
        </p>
        <ul className="list footer__links">
          <li>
            <a
              href="https://practicum.yandex.ru/"
              className="link footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Segodnya/movies-explorer-frontend"
              className="link footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
