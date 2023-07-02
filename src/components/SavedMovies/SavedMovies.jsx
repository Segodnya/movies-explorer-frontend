import React, { useState, useEffect } from 'react';
import '../Movies/Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { filterMovies, filterDuration } from '../../utils/utils';

const SavedMovies = ({ isLoggedIn, savedMovies, onDislike }) => {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const onSearch = (query) => {
    setSearchQuery(query);
  };

  const handleShortMovies = () => {
    setIsShortMovies(!isShortMovies);
  };

  useEffect(() => {
    const moviesList = filterMovies(savedMovies, searchQuery);
    setFilteredMovies(isShortMovies ? filterDuration(moviesList) : moviesList);
  }, [savedMovies, isShortMovies, searchQuery]);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm onSearch={onSearch} onCheckbox={handleShortMovies} isShortMovies={isShortMovies} />
      <MoviesCardList isNotFound={isNotFound} isSavedMovies={true} cards={filteredMovies} savedMovies={savedMovies} onDislike={onDislike} />
      <Footer />
    </>
  );
};

export default SavedMovies;
