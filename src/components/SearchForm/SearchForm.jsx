import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({ onSearch, onCheckbox, isShortMovies }) => {
  const [isQueryError, setIsQueryError] = useState(false);
  const [query, setQuery] = useState('');
  const path = window.location.pathname;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length === 0) {
      setIsQueryError(true);
    } else {
      setIsQueryError(false);
      onSearch(query);
    }
  };

  useEffect(() => {
    if (path === '/movies' && localStorage.getItem('query')) {
      const localQuery = localStorage.getItem('query');
      setQuery(localQuery);
    }
  }, [path]);

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input required className="search-form__input" name="query" placeholder="Фильм" value={query || ''} onChange={handleChange} />
        <button className="search-form__button" type="submit"></button>
      </form>
      <FilterCheckbox onCheckbox={onCheckbox} isShortMovies={isShortMovies} />
      {isQueryError && <span className="auth__error">Нужно ввести ключевое слово</span>}
    </>
  );
};

export default SearchForm;
