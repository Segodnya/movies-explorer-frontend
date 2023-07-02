const MOVIE_URL = 'https://api.nomoreparties.co';

export function checkResponse(response) {
  return response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`);
}

export const getMovies = async () => {
  const response = await fetch(`${MOVIE_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return checkResponse(response);
};
