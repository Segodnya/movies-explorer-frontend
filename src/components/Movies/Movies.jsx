import React from 'react';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

const Movies = () => {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <button>Еще</button>
    </>
  );
};

export default Movies;
