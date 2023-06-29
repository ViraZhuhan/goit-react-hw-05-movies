import { useState } from 'react';
import { getMovie } from '../api/index';
import {MovieList} from '../components/MovieList';
import { useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovie();

        if (data.results.length === 0) {
          throw Error(`No trend movies"`);
        }
        const movies = data.results.map(
          ({
            id,
            title
           
          }) => ({
            id,
            title
          })
        );

        setMovies(prevMovies => [...movies]);
        console.log(movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={movies}></MovieList>
    </main>
  );
};


export default Home;