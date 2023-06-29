import React, { useState } from "react";
import "./MoviesCard.css";
import { Link } from "react-router-dom";
import { saveMovie } from "../../utils/api/mainApi";

const MoviesCard = ({
  movie,
  title,
  cover,
  duration,
  isLiked,
  trailerLink,
}) => {
  const [liked, setLiked] = useState(isLiked);
  console.log(liked, movie.image.url);

  const handleLike = (movie) => {
    if (isLiked === false) {
      saveMovieToMongo(movie);
      setLiked(!liked);
    } else {
      setLiked(!liked);
    }
  };

  const saveMovieToMongo = async () => {
    const updatedMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
      movieId: movie.id,
    };
    await saveMovie({ movieData: updatedMovie });
    console.log("film saved");
  };

  return (
    <article className="movie-card">
      <Link to={trailerLink} target="_blank" rel="noopener noreferrer">
        <img className="movie-card__image" src={cover} alt="обложка фильма" />
      </Link>
      <div className="movie-card__description">
        <h2 className="movie-card__title">{title}</h2>
        {liked ? (
          <button
            onClick={handleLike}
            className="movie-card__button movie-card__button_type_dislike"
            type="button"
          ></button>
        ) : (
          <button
            onClick={handleLike}
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
