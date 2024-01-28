import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getrFilmsByName } from 'api/filmsApi';
import { FilmSearchForm } from './FilmSearchForm/FilmSearchForm';
import { FilmList } from 'components/Films/Films.styled';
import FilmsItem from '../Films/FilmsItem/FilmsItem';

export const FilmSearch = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await getrFilmsByName(search);
        setFilms(results?.length ? results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchFilms();
    }
  }, [search]);

  const handleSearch = ({ search }) => {
    setSearchParams({ search });
    setFilms([]);
  };

  return (
    <>
      <FilmSearchForm onSubmit={handleSearch} />
      {error && <p>{error}</p>}
      {loading && <p>...Loading</p>}
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

export default FilmSearch;
