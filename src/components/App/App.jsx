import { Route, Routes} from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../Layout';
import { Container} from './App.styled';
import ErrorMessage from '../ErrorMessage';


const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetals'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));


 const App = () => {
  return (
    <Container>
      <ToastContainer autoClose={3000} theme={'colored'} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} > 
          <Route path="cast" element={<Cast />} />
          <Route path="reviwes" element={<Reviews />} />
          </Route>
          <Route path="*" element={<ErrorMessage>Not found</ErrorMessage> } />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;