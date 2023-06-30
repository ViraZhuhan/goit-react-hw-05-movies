import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm';
import { getMovieByName } from '../api';
import Skeleton from 'components/Skeleton/Skeleton';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery') ?? ' ';

  useEffect(() => {
    movies && setStatus(STATUS.RESOLVED);
  }, [movies]);

  useEffect(() => {
    const fetchMoviesByname = async () => {
      setStatus(STATUS.PENDING);
      try {
        const data = await getMovieByName({ searchQuery });
        const movies = data.results.map(
          ({
            id,
            original_name,
            original_title,
            genre_ids,
            overview,
            vote_average,
            popularity,
            poster_path,
          }) => ({
            id,
            original_name,
            original_title,
            genre_ids,
            overview,
            vote_average,
            popularity,
            poster_path,
          })
        );
        setMovies(movies);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
      }
    };

    fetchMoviesByname();
  }, [searchQuery]);

  return (
    <div>
      <MovieSearchForm setSearchParams={setSearchParams} />
      {status === STATUS.PENDING && <Skeleton />}
      {status === STATUS.RESOLVED && <MovieList movies={movies} />}
      {/* {status === STATUS.REJECTED && <ErrorMessage>{error}</ErrorMessage>}  */}
    </div>
  );
};

export default Movies;
