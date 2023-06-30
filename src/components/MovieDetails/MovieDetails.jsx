import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  const cleanMovieId = Number(movieId);
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(cleanMovieId)
      .then(data => {
        setDetails(data);
      })
      .catch(error => console.log(error));
  }, [cleanMovieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    details;

  const userScore = vote_average * 10;
  const userScoreFix = userScore.toFixed(0);

  const year = release_date ? release_date.substring(0, 4) : '';

  return (
    <div className={css.container}>
      <button className={css.btn}>
        <Link className={css['btn-link']} to={location.state?.from ?? '/'}>
          &#8592; Go back
        </Link>
      </button>

      <div className={css['box']}>
        <img
          className={css['img-details']}
          src={
            poster_path ? (
              `https://image.tmdb.org/t/p/w300${poster_path}`
            ) : (
              <p>No poster, sorry!</p>
            )
          }
          alt={overview}
          loading="lazy"
        />
        <div className={css['info-details']}>
          <h2>
            {title} &#40; {year} &#41;{' '}
          </h2>
          <p>User scrode: {userScoreFix} %</p>
          <div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <ul className={css.list}>
              {genres &&
                genres.length &&
                genres.map(({ id, name }) => <li key={id}>{name}</li>)}
            </ul>
          </div>
        </div>
      </div>
      <div className={css.additioanInfo}>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
