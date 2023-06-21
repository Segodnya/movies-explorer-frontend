import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
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
      <section className="movies">
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList movies={savedMovies} />
        <button className="movies__button">Еще</button>
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
