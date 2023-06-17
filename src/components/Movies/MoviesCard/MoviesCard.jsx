import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ title, cover, duration }) => {
  return (
    <article className="movie-card">
      <img className="movie-card__image" src={cover} alt="movie" />
      <div className="movie-card__description">
        <h3 className="movie-card__title">{title}</h3>
        <button className="movie-card__button"></button>
      </div>
      <p className="movie-card__duration">{duration}</p>
    </article>
  );
};

export default MoviesCard;
