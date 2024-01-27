import React, { Suspense, useEffect, useState } from 'react';
import { getFilmById } from 'api/filmsApi';
import { Outlet, useParams } from 'react-router-dom';
import SingleFilm from 'components/SingleFilm/SingleFilm';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import { Container, NavLinks } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [film, setFilm] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        setLoading(true);
        const { data } = await getFilmById(movieId);
        setFilm(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFilm();
  }, [movieId]);

  if (!film) {
    return null;
  }

  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <p>...Loading</p>}
      <ButtonBack />
      <SingleFilm film={film} />
      <Container>
        <NavLinks to={'cast'}>Cast</NavLinks>
        <NavLinks to={'reviews'}>Reviews</NavLinks>
      </Container>

      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
