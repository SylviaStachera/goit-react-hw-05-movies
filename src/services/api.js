import axios from 'axios';

const apiKey = '5b510caffd74cc663774c058405dd762';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${apiKey}`);
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${apiKey}&query=${query}&include_adult=false&language=en-US&page=1`
  );
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${apiKey}&language=en-US`
  );
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
  );
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
  );
  return response.data;
};
