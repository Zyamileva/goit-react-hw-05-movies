import React from 'react';
import { FilmItems, FilmLink, FilmImg, FilmName } from './FilmsItem.styled';

const FilmsItem = ({ id, title, original_name, poster_path }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <FilmItems key={id}>
      <FilmLink to={`/movies/${id}`}>
        <FilmImg src={imgUrl.concat(poster_path)} alt="title" />
        <FilmName>{title ?? original_name}</FilmName>
      </FilmLink>
    </FilmItems>
  );
};

export default FilmsItem;
