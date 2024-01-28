import React, { useState } from 'react';
// import { SearchButton, SearchForm, SearchFormInput } from './Movies.styled';
// import { useSearchParams } from 'react-router-dom';
import { FilmSearch } from 'components/FilmSearch/FilmSearch';

export const Movies = () => {
  // const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState('');
  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <FilmSearch />
    </div>
  );
};
