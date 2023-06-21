import React from "react";
import "./Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import cover from "../../images/movie.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = ({ isLogged }) => {
  isLogged = true;
  let initialCards = [
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
    {
      title: "Gimme Danger: История Игги и The Stooges",
      cover: cover,
      duration: "1ч 42м",
      isOwn: false,
    },
  ];

  return (
    <>
      <Header isLogged={isLogged} />
      <main className="movies" aria-label="Список фильмов">
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList movies={initialCards} />
        <button className="movies__button">Еще</button>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
