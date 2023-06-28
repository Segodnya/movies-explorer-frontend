import React from "react";
import "./SearchForm.css";

const SearchForm = ({ handleSearch, query, setQuery }) => {
  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        required
        className="search-form__input"
        placeholder="Фильм"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-form__button" type="submit"></button>
    </form>
  );
};

export default SearchForm;
