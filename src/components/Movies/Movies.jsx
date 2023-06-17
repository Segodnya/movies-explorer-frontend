import React from 'react';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <>
      Movies
      <MoviesCardList />
      <button>Еще</button>
    </>
  );
};

export default Movies;
