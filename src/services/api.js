import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: '5b510caffd74cc663774c058405dd762',
};

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?`);
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?&query=${query}&include_adult=false&language=en-US&page=1`
  );
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}?language=en-US`);
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?language=en-US`);
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?language=en-US&page=1`
  );
  return response.data;
};
