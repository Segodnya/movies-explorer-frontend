import React, { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({
  movies,
  savedMovies,
  filterMovies,
  setSavedMovies,
}) => {
  const [visibleMovies, setVisibleMovies] = useState(12);

  const handleShowMore = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + getIncrement());
  };

  const handleMovieDelete = async (movieId) => {
    const updatedSavedMovies = savedMovies.filter(
      (movie) => movie._id !== movieId
    );
    console.log(savedMovies);
    await setSavedMovies(updatedSavedMovies);
    console.log(savedMovies);
  };

  const getIncrement = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024 && screenWidth <= 1174) {
      return 3;
    } else if (screenWidth >= 595 && screenWidth <= 1023) {
      return 2;
    } else if (screenWidth <= 594) {
      return 2;
    } else {
      return 8;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleMovies(12);
    };

    const debouncedHandleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 1000);
    };

    let resizeTimer;
    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  useEffect(() => {
    setVisibleMovies(12);
  }, [savedMovies]);

  return (
    <>
      {movies.length === 0 ? (
        <div></div>
      ) : (
        <ul className="list movies-card-list">
          {window.location.pathname === "/saved-movies"
            ? movies.map((movie) => (
                <li key={movie._id}>
                  <MoviesCard movie={movie} onDelete={handleMovieDelete} />
                </li>
              ))
            : filterMovies(movies).map((movie, index) => (
                <li key={movie.id}>
                  {index < visibleMovies && (
                    <MoviesCard
                      movies={movies}
                      savedMovies={savedMovies}
                      movie={movie}
                    />
                  )}
                </li>
              ))}
        </ul>
      )}
      {visibleMovies < movies.length && (
        <button
          className="movies__button"
          type="button"
          onClick={handleShowMore}
        >
          Еще
        </button>
      )}
    </>
  );
};

export default MoviesCardList;
