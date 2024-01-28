import React, { Suspense, useEffect, useState } from 'react';
import { getFilmById } from 'api/filmsApi';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import SingleFilm from 'components/SingleFilm/SingleFilm';
import { Container, NavLinks, ButtonLink } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [film, setFilm] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();

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
  const goBack = location.state?.from ?? '/';

  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <p>...Loading</p>}
      <ButtonLink to={goBack}>← Go back</ButtonLink>
      <SingleFilm film={film} />
      <Container>
        <NavLinks to={'cast'} state={{ from: goBack }}>
          Cast
        </NavLinks>
        <NavLinks to={'reviews'} state={{ from: goBack }}>
          Reviews
        </NavLinks>
      </Container>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
