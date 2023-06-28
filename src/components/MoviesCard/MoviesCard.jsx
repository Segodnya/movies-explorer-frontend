import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({ title, cover, duration, isOwn }) => {
  return (
    <article className="movie-card">
      <img className="movie-card__image" src={cover} alt="обложка фильма" />
      <div className="movie-card__description">
        <h2 className="movie-card__title">{title}</h2>
        {isOwn ? (
          <button
            className="movie-card__button movie-card__button_type_delete"
            type="button"
          ></button>
        ) : (
          <button
            className="movie-card__button movie-card__button_type_like"
            type="button"
          ></button>
        )}
      </div>
      <p className="movie-card__duration">{duration}</p>
    </article>
  );
};

export default MoviesCard;