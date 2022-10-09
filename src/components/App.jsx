import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import PageNotFound from '../pages/PageNotFound';
import Home from '../pages/Home/Home';
import Cast from '../pages/Cast/Cast';
import Reviews from '../pages/Reviews/Reviews'
import { lazy } from 'react';
  
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'))

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="*" element={<PageNotFound />} />
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />

          <Route path='movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          
        </Route>
      </Routes>
    </>
  );
};

export default App;
