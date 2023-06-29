import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { getInfoMovie } from '../../api';
import MovieCard from 'components/MovieCard/MovieCard';
import { Links } from './MovieDetals.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? `/`);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchInfoMovie = async () => {
      try {
        const data = await getInfoMovie({ movieId });
        setMovie(data);
      } catch (error) {
        console.log(error);
        setMovie('');
      }
    };

    fetchInfoMovie();
  }, [movieId]);

  return (
    <div>
      <Links to={goBackLink.current}>Go back</Links>
      <MovieCard movieDetals={movie} />
      <p>Aditional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviwes">Reviews</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
