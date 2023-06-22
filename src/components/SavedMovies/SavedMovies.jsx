import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import cover from "../../images/movie.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SavedMovies = ({ isLogged }) => {
  isLogged = true;
  let savedMovies = [
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: true,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: true,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: true,
    },
  ];

  return (
    <>
      <Header isLogged={isLogged} />
      <main className="movies" aria-label="Список сохраненных фильмов">
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList movies={savedMovies} />
        <button className="movies__button" type="button">
          Еще
        </button>
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
