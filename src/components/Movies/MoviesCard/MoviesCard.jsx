import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({ title, cover, duration, isOwn }) => {
  return (
    <article className="movie-card">
      <img className="movie-card__image" src={cover} alt="movie" />
      <div className="movie-card__description">
        <h3 className="movie-card__title">{title}</h3>
        {isOwn ? (
          <button className="movie-card__button movie-card__button_type_delete"></button>
        ) : (
          <button className="movie-card__button movie-card__button_type_like"></button>
        )}
      </div>
      <p className="movie-card__duration">{duration}</p>
    </article>
  );
};

export default MoviesCard;
