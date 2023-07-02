import { SHORTS } from './constants';

export const filterMovies = (movies, query) => {
  const moviesByQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userQuery = query.toLowerCase().trim();
    return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
  });
  return moviesByQuery;
};

export const filterDuration = (movies) => {
  return movies.filter((movie) => movie.duration < SHORTS);
};

export const convertDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч ${minutes}мин`;
};
