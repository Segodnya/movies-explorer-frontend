import React from 'react';
import './MoviesCardList.css';
import cover from '../../../images/movie.png';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  let initialCards = [
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
    {
      title: 'Gimme Danger: История Игги и The Stooges',
      cover: cover,
      duration: '1ч 42м',
    },
  ];
  return (
    <ul className="list movies-card-list">
      {initialCards.map((movie) => {
        return (
          <li>
            <MoviesCard title={movie.title} cover={movie.cover} duration={movie.duration} />
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesCardList;
