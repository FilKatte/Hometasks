export const fetchFilmsList = () => {
  return fetch(`https://swapi.co/api/films`).then(response => response.json());
};
