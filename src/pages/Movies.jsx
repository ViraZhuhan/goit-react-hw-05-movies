import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList';
import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm';
import { getMovieByName } from '../api';
import Skeleton from 'components/Skeleton/Skeleton';
// import ErrorMessage from 'components/ErrorMessage';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery') ?? ' ';

  useEffect(() => {
    setStatus(STATUS.PENDING);
    if (searchQuery === '') return;

    const fetchMoviesByname = async () => {
      try {
        const data = await getMovieByName({ searchQuery });
        const movies = data.results.map(
          ({
            id,
            title,
            genre_ids,
            overview,
            vote_average,
            popularity,
            poster_path,
          }) => ({
            id,
            title,
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
        setStatus(STATUS.REJECTED)
      }
    };
    fetchMoviesByname();
  }, [searchQuery]);

  // const visibleErrorMessage = status === STATUS.REJECTED || movies.length===0;


  return (
    <div>
      <MovieSearchForm setSearchParams={setSearchParams} />
      {status === STATUS.PENDING && <Skeleton />}

      {movies.length > 0 && <MovieList movies={movies}/>}
      {/* {visibleErrorMessage && <ErrorMessage/>} */}
    </div>
  );
}


export default Movies;