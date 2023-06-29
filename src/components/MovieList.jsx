import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieList = ({movies}) => {
  return (
    <div>
      {movies.map(({id, title}) => (
        <div key={id}>
          <Link to={`/movies/${id}`}>
            <p>{title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, 
      title: PropTypes.string.isRequired,
    })
  ),
}