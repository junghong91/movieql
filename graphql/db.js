// let movies = [
//   {
//     id: 0,
//     name: "Star Wars - The New One",
//     score: 82
//   },
//   {
//     id: 1,
//     name: "Avengers - The New One",
//     score: 89
//   },
//   {
//     id: 2,
//     name: "The GodFather",
//     score: 92
//   },
//   {
//     id: 3,
//     name: "Logan",
//     score: 79
//   }
// ];

// export const getMovies = () => movies;

// export const getById = id => {
//   const filteredMovies = movies.filter(movie => movie.id === id);
//   return filteredMovies[0];
// };

// export const deleteMovie = id => {
//   const cleanedMovies = movies.filter(movie => movie.id !== id);
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: movies.length,
//     name,
//     score
//   };
//   movies.push(newMovie);
//   return newMovie;
// };

import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
};
