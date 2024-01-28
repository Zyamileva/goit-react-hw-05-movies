import React from 'react';
import {
  Container,
  ImageFilm,
  Wrapper,
  Title,
  Year,
  TextSpan,
  Description,
} from './SingleFilm.styled';

const SingleFilm = ({ film }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    film;

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  const imgUrl = imgBaseUrl.concat(poster_path);
  const releaseDate = release_date.slice(0, 4);
  const voteScore = vote_average.toFixed(1);
  const genresList = genres.map(ganre => ganre.name).join(', ');

  return (
    <Container>
      <ImageFilm src={imgUrl} alt="{title}" width="350" />
      <Wrapper>
        <Title>
          {title} <Year>({releaseDate})</Year>
        </Title>
        <Description>
          User score: <TextSpan>{voteScore}%</TextSpan>
        </Description>
        <Description>
          Overview: <TextSpan>{overview}</TextSpan>
        </Description>
        <Description>
          Genres: <TextSpan>{genresList}</TextSpan>
        </Description>
      </Wrapper>
    </Container>
  );
};

export default SingleFilm;
