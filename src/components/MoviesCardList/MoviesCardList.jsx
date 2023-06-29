import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ movies, filterMovies }) => {
  return (
    <>
      {movies.length === 0 ? (
        <div></div>
      ) : (
        <ul className="list movies-card-list">
          {filterMovies(movies).map((movie) => {
            return (
              <li>
                <MoviesCard
                  title={movie.nameRU}
                  cover={`https://api.nomoreparties.co${movie.image.url}`}
                  duration={`${Math.floor(movie.duration / 60)}ч ${
                    movie.duration % 60
                  }мин`}
                  trailerLink={movie.trailerLink}
                  isOwn={movie.isOwn}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MoviesCardList;
