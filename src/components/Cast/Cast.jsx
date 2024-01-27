import { getCastByIdFilm } from 'api/filmsApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastLink,
  Character,
  CastImg,
  CastItem,
  Name,
  Text,
  Container,
  Error,
  Loading,
} from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  const { movieId } = useParams();
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const {
          data: { cast },
        } = await getCastByIdFilm(movieId);
        setCast(cast?.length ? cast : []);
        console.log('cast', cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, [movieId]);

  return (
    <>
      {error && <Error>{error}</Error>}
      {loading && <Loading>...Loading</Loading>}
      <CastLink>
        {cast.map(
          ({ id, profile_path, name, character }) =>
            profile_path && (
              <CastItem key={id}>
                <CastImg src={imgBaseUrl.concat(profile_path)} alt={name} />
                <Container>
                  <Name>{name}</Name>
                  <Character>
                    <Text>Character:</Text> {character}
                  </Character>
                </Container>
              </CastItem>
            )
        )}
      </CastLink>
    </>
  );
};
