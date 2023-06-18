import React from 'react';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

const Movies = () => {
  return (
    <section className="movies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
      <button className="movies__button">Еще</button>
    </section>
  );
};

export default Movies;
