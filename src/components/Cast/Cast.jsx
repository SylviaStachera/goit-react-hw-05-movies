import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../services/api';

import css from './Cast.module.css';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => {
        setCasts(data.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <section>
      <ol>
        {casts.length ? (
          casts.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  className={css.img}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : `https://www.rsjlawang.com/assets/images/dokter/no_image.jpg`
                  }
                  alt={name}
                  loading="lazy"
                />

                <h4>{name}</h4>
                <p className={css.character}>Character: {character}</p>
              </li>
            );
          })
        ) : (
          <p>Sorry, there is no information about cast</p>
        )}
      </ol>
    </section>
  );
};

export default Cast;
