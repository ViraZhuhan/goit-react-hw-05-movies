import { WrapInfo, WrapCard, Title, SubTitle, Text } from './MovieCard.styled';
import PropTypes from 'prop-types';

const MovieCard = ({ movieDetals }) => {
  const { title, poster_path, overview, genres, release_date, vote_average } =
    movieDetals;

  const release = new Date(release_date).getFullYear();
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://via.placeholder.com/395x574?text=No+Image';

  const genreList = getGenres();

  function getGenres() {
    if (!genres) {
      return;
    }
    return genres.map(genre => genre.name).join(`, `);
  }

  return (
    <WrapCard>
      <img src={imageUrl} alt={title} loading="lazy" width="240" />

      <WrapInfo>
        <Title>
          {' '}
          {title} ({release}){' '}
        </Title>
        <Text>User score: {Math.round(vote_average * 10)}%</Text>
        <SubTitle>Overview</SubTitle>
        <Text>{overview}</Text>
        <SubTitle>Genres</SubTitle>
        <Text>{genreList}</Text>
      </WrapInfo>
    </WrapCard>
  );
};
export default MovieCard;



MovieCard.propTypes = {
  movieDetals: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired, 
      poster_path: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      genres: PropTypes.array, 
    })
  ),
};