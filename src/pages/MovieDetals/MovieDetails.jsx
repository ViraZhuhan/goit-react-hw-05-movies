import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getInfoMovie } from '../../api';
import { Item, Links, Text } from './MovieDetals.styled';
import MovieCard from 'components/MovieCard/MovieCard';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetails = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState('');

  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    movie && setStatus(STATUS.RESOLVED);
  }, [movie]);

  useEffect(() => {
    const fetchInfoMovie = async () => {
      setStatus(STATUS.PENDING);
      try {
        const data = await getInfoMovie({ movieId });
        setMovie(data);
        setStatus(STATUS.RESOLVED);
        setError(null);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
      }
    };
    fetchInfoMovie();
  }, [movieId]);

  if (status === STATUS.PENDING) {
    return <p>Loading...</p>;
  }

  if (status === STATUS.RESOLVED) {
    return (
      <div>
        <Links to={location.state?.from || '/movies'}>Go back</Links>
        <MovieCard movieDetals={movie} />
        <Text>Aditional information</Text>
        <ul>
          <Item>
            <Link to="cast">Cast</Link>
          </Item>
          <Item>
            <Link to="reviwes">Reviews</Link>
          </Item>
        </ul>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    );
  }

  if (status === STATUS.REJECTED) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
};

export default MovieDetails;
