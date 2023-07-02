import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = ({ savedMovies, cards, isSavedMovies, isLoading, isRequestError, isNotFound, onLike, onDislike }) => {
  const [visibleMovies, setVisibleMovies] = useState(0);
  const path = window.location.pathname;

  const visibleCount = () => {
    const width = window.innerWidth;
    if (width > 1174) {
      return 12;
    } else if (width > 1023) {
      return 12;
    } else if (width > 595) {
      return 9;
    } else if (width <= 595) {
      return 5;
    }
  };

  useEffect(() => {
    setVisibleMovies(visibleCount());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setVisibleMovies(visibleCount());
    };

    const debouncedHandleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 1000);
    };

    let resizeTimer;
    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  const showMore = () => {
    const width = window.innerWidth;
    if (width > 1174) {
      setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 8);
    } else if (width > 1023) {
      setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 8);
    } else if (width > 595) {
      setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 3);
    } else if (width <= 595) {
      setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 2);
    }
  };

  const getCard = (savedMovies, card) => {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  };

  return (
    <>
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && <>Ничего не найдено</>}
      {isRequestError && !isLoading && <>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</>}
      {!isLoading && !isRequestError && !isNotFound && (
        <>
          {path === '/saved-movies' ? (
            <>
              <ul className="list movies-card-list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedMovies ? card._id : card.id}
                    saved={getCard(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedMovies={isSavedMovies}
                    onLike={onLike}
                    onDislike={onDislike}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul className="list movies-card-list">
                {cards.slice(0, visibleMovies).map((card) => (
                  <MoviesCard
                    key={isSavedMovies ? card._id : card.id}
                    saved={getCard(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedMovies={isSavedMovies}
                    onLike={onLike}
                    onDislike={onDislike}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              {cards.length > visibleMovies ? (
                <button className="movies__button" type="button" onClick={showMore}>
                  Ещё
                </button>
              ) : (
                ''
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default MoviesCardList;
