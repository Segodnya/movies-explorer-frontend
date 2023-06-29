import React, { useState } from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { getMovies } from "../../utils/api/moviesApi";

const Movies = ({ isLoggedIn }) => {
  // Toggle Short Films

  const [toggleState, setToggleState] = useState(false);

  const changeToggleState = () => {
    setToggleState(!toggleState);
  };

  // Search Query

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    getAllMovies();
  };

  const getAllMovies = () => {
    getMovies().then((data) => {
      data.map((x) => (x.isLiked = false));
      setMovies(data);
    });
  };

  const filterMovies = (movies) => {
    console.log(movies);
    let filterredMovies;
    filterredMovies = movies.filter((item) =>
      item.nameRU.toLowerCase().includes(query.toLowerCase())
    );
    if (toggleState) {
      filterredMovies = filterredMovies.filter((item) => item.duration <= 40);
    }
    return filterredMovies;
  };

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
        <button className="movies__button" type="button">
          Еще
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
