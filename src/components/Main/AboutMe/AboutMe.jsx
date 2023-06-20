import React from "react";
import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";
import photo from "../../../images/student-photo.png";

const AboutMe = () => {
  return (
    <section className="section" id="about-me">
      <h2 className="title-outlined">Студент</h2>
      <div className="about-me__content">
        <article className="about-me__article">
          <div className="about-me__text">
            <div className="about-me__description">
              <h3 className="about-me__title">Виталий</h3>
              <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
              <p className="about-me__paragraph">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                Контур». После того, как прошёл курс по веб-разработке, начал
                заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <a
              href="https://github.com/Segodnya"
              className="link about-me__link"
            >
              Github
            </a>
          </div>
          <img src={photo} alt="student" className="about-me__photo" />
        </article>
        <Portfolio />
      </div>
    </section>
  );
};

export default AboutMe;
