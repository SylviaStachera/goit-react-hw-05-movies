const apiKey = "5b510caffd74cc663774c058405dd762";
const baseUrl = "https://api.themoviedb.org/3/";

export const getTrending = async () => {
	const url = `${baseUrl}trending/movie/day?api_key=${apiKey}`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error("An error occurred while fetching trending movies.");
	}
};
export const searchMovies = async (query) => {
	const url = `${baseUrl}search/movie?api_key=${apiKey}&query=${query}&include_adult=false&language=en-US&page=1`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error("An error occurred while searching for movies.");
	}
};

export const getMovieDetails = async (movieId) => {
	const url = `${baseUrl}movie/${movieId}?api_key=${apiKey}&language=en-US`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error("An error occurred while fetching movies details.");
	}
};

export const getMovieCredits = async (movieId) => {
	const url = `${baseUrl}movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;

	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error("An error occurred while fetching movies credits.");
	}
};

export const getMovieReviews = async (movieId) => {
	const url = `${baseUrl}movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error("An error occurred while fetching movies reviews.");
	}
};
