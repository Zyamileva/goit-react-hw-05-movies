import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Layout from 'components/Layout/Layout';
import { Home } from 'pages/Home';

const Movies = lazy(() =>
  import('./pages/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);
const MovieDetails = lazy(() =>
  import('./pages/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);

const Cast = lazy(() =>
  import('./components/Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('./components/Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

const AppRoutes = props => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
