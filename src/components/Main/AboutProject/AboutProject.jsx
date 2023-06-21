import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="section about-project" id="about-project">
      <h2 className="title-outlined about-project__title">О проекте</h2>
      <div className="about-project__paragraphs">
        <article className="about-project__article">
          <h3 className="about-project__article-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__article-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className="about-project__article">
          <h3 className="about-project__article-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__article-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className="diagram">
        <div className="diagram__row">
          <div className="diagram__col">1 неделя</div>
          <div className="diagram__col">4 недели</div>
        </div>
        <div className="diagram__row">
          <div className="diagram__col">Back-end</div>
          <div className="diagram__col">Front-end</div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
