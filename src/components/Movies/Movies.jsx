import React from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = ({
  isLoggedIn,
  movies,
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
      <main className="movies" aria-label="Список фильмов">
        <SearchForm
          handleSearch={handleSearch}
          query={query}
          setQuery={setQuery}
        />
        <FilterCheckbox
          toggleState={toggleState}
          changeToggleState={changeToggleState}
        />
        <MoviesCardList movies={movies} filterMovies={filterMovies} />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
