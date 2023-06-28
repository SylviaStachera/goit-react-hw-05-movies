import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from '../../components/services/api';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setIsLoading(true);

      searchMovies(query)
        .then(data => {
          setMovieList(data.results);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
        });
    } else {
      setMovieList([]);
      setIsLoading(false);
    }
  }, [query]);

  const handleInputValue = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <div>
      <SearchBar onInputValue={handleInputValue} />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {movieList.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
