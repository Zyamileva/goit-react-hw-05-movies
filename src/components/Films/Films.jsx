import { getAllFilms } from 'api/filmsApi';
import React, { useEffect, useState } from 'react';
import { Error, Loading, FilmList } from './Films.styled';
import FilmsItem from './FilmsItem/FilmsItem';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const location = useLocation();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await getAllFilms();
        setFilms(results?.length ? results : []);
      } catch (error) {
        setError(error.message);
      } finally {
      }
      setLoading(false);
    };
    fetchFilms();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      {error && <Error>{error}</Error>}
      {loading && <Loading>...Loading</Loading>}
      {Boolean(films.length) && (
        <FilmList>
          {films.map(({ id, title, original_name, poster_path }) => {
            return (
              <FilmsItem
                key={id}
                id={id}
                title={title}
                original_name={original_name}
                poster_path={poster_path}
              />
            );
          })}
        </FilmList>
      )}
    </>
  );
};

export default Films;
