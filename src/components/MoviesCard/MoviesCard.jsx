import React from 'react';
import { convertDuration } from '../../utils/utils';
import './MoviesCard.css';

const MoviesCard = ({ saved, card, isSavedMovies, onLike, onDislike, savedMovies }) => {
  const onButttonClick = () => {
    if (saved) {
      onDislike(savedMovies.filter((m) => m.movieId === card.id)[0]);
    } else {
      onLike(card);
    }
  };

  const onButtonDeleteClick = () => {
    onDislike(card);
  };

  const cardSaveButtonClassName = `${saved ? 'movie-card__button movie-card__button_type_like' : 'movie-card__button movie-card__button_type_dislike'}`;

  return (
    <article className="movie-card">
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className="movie-card__image" alt={card.nameRU} src={isSavedMovies ? card.image : `https://api.nomoreparties.co/${card.image.url}`} />
      </a>
      <div className="movie-card__description">
        <h2 className="movie-card__title">{card.nameRU}</h2>
        {isSavedMovies ? (
          <button type="button" className="movie-card__button movie-card__button_type_delete" onClick={onButtonDeleteClick}></button>
        ) : (
          <button type="button" className={cardSaveButtonClassName} onClick={onButttonClick}></button>
        )}
      </div>
      <p className="movie-card__duration">{convertDuration(card.duration)}</p>
    </article>
  );
};

export default MoviesCard;
