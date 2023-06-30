import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, WrapCard, Img, Title, LinkWrap} from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  const IMG_URL = `https://image.tmdb.org/t/p/w500/`;
  const IMG_DF = 'https://via.placeholder.com/395x574?text=No+Image';

  return (
    <List>
      {movies.map(({ id, original_title, original_name, poster_path }) => (
        <WrapCard key={id}>
          <LinkWrap to={`/movies/${id}`} state={{ from: location }}>
            <Img
              src={`${poster_path ? IMG_URL + poster_path : IMG_DF}`}
              loading="lazy"
            />
            <Title>{original_title ?? original_name}</Title>
          </LinkWrap>
        </WrapCard>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
};
