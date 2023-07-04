import React, { useState, useEffect } from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { getMovies } from '../../utils/api/moviesApi';
import { filterMovies, filterDuration } from '../../utils/utils';

const Movies = ({ isLoggedIn, savedMovies, onDislike, onLike }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const handleFilterMovies = (movies, query, short) => {
    const moviesList = filterMovies(movies, query, short);
    setInitialMovies(moviesList);
    setFilteredMovies(short ? filterDuration(moviesList) : moviesList);
    localStorage.setItem('movies', JSON.stringify(moviesList));
    localStorage.setItem('allMovies', JSON.stringify(movies));
    localStorage.setItem('shorts', JSON.stringify(short));
  };

  const handleShortMovies = () => {
    setIsShortMovies(!isShortMovies);
    if (!isShortMovies) {
      if (filterDuration(initialMovies).length === 0) {
        setFilteredMovies(filterDuration(initialMovies));
      } else {
        setFilteredMovies(filterDuration(initialMovies));
      }
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem('shorts', !isShortMovies);
  };

  const onSearch = (query) => {
    localStorage.setItem('query', query);
    localStorage.setItem('shorts', isShortMovies);

    if (localStorage.getItem('allMovies')) {
      const movies = JSON.parse(localStorage.getItem('allMovies'));
      handleFilterMovies(movies, query, isShortMovies);
    } else {
      setIsLoading(true);
      getMovies()
        .then((cardsData) => {
          handleFilterMovies(cardsData, query, isShortMovies);
          setIsRequestError(false);
        })
        .catch((err) => {
          setIsRequestError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    if (localStorage.getItem('shorts') === 'true') {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setInitialMovies(movies);
      if (localStorage.getItem('shorts') === 'true') {
        setFilteredMovies(filterDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('query')) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm onSearch={onSearch} onCheckbox={handleShortMovies} isShortMovies={isShortMovies} />
      <MoviesCardList
        savedMovies={savedMovies}
        cards={filteredMovies}
        isSavedMovies={false}
        isLoading={isLoading}
        isRequestError={isRequestError}
        isNotFound={isNotFound}
        onLike={onLike}
        onDislike={onDislike}
      />
      <Footer />
    </>
  );
};

export default Movies;
