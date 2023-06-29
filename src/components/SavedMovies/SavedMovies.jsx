import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SavedMovies = ({
  isLoggedIn,
  savedMovies,
  toggleState,
  changeToggleState,
  handleSearch,
  query,
  setQuery,
  filterMovies,
}) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies" aria-label="Список сохраненных фильмов">
        <SearchForm
          handleSearch={handleSearch}
          query={query}
          setQuery={setQuery}
        />
        <FilterCheckbox
          toggleState={toggleState}
          changeToggleState={changeToggleState}
        />
        <MoviesCardList movies={savedMovies} filterMovies={filterMovies} />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
