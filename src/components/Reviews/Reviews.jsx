import React, { useEffect, useState } from 'react';
import { getrReviewsByIdFilm } from 'api/filmsApi';
import { useParams } from 'react-router-dom';
import {
  Author,
  ReviewItem,
  ReviewList,
  Content,
  Error,
  Loading,
  Text,
} from './Reviews.styled';

export const Reviews = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await getrReviewsByIdFilm(movieId);
        setReview(results?.length ? results : []);
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
      <ReviewList>
        {review.map(({ id, content, author }) => (
          <ReviewItem key={id}>
            <Author>
              <Text>Author: </Text> {author}
            </Author>
            <Content>{content}</Content>
          </ReviewItem>
        ))}
      </ReviewList>
    </>
  );
};
