import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = (props) => {
  return (
    <ul className="list movies-card-list">
      {props.movies.map((movie) => {
        return (
          <li>
            <MoviesCard
              title={movie.title}
              cover={movie.cover}
              duration={movie.duration}
              isOwn={movie.isOwn}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesCardList;
