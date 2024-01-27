import axios from 'axios';

const searchParams = new URLSearchParams({
  api_key: '94dfbfacb1baa3e27c75ce513d53f722',
  language: 'en-US',
  include_adult: false,
});

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const getAllFilms = () => {
  return instance.get(`/trending/all/week?${searchParams}`);
};

export const getFilmById = id => {
  return instance.get(`/movie/${id}?${searchParams}`);
};

export const getCastByIdFilm = id => {
  return instance.get(`/movie/${id}/credits?${searchParams}`);
};

// export const getPostById = id => {
//   return instance.get(`/${id}`);
// };

// export const searchPosts = (q, _page = 1) => {
//   return instance.get('/', {
//     params: {
//       q,
//       _limit: 6,
//       _page,
//     },
//   });
// };

// export const getCommentsByPostId = id => {
//   return instance.get(`/${id}/comments`);
// };
