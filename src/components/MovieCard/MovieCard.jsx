import {
  WrapInfo,
  WrapCard,
  Title,
  SubTitle,
  Text,
  Img,
} from './MovieCard.styled';
import PropTypes from 'prop-types';

const MovieCard = ({ movieDetals }) => {
  const {
    title,
    poster_path,
    overview,
    genres,
    release_date,
    vote_average,
    runtime,
  } = movieDetals;

  console.log(movieDetals);

  const release = new Date(release_date).getFullYear();
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://via.placeholder.com/395x574?text=No+Image';

  const genreList = genres.map(genre => genre.name).join(`, `);

  return (
    <WrapCard>
      <Img src={imageUrl} alt={title} loading="lazy" />

      <WrapInfo>
        <Title>
          {' '}
          {title} ({release}){' '}
        </Title>
        <Text>User score: {Math.round(vote_average * 10)}%</Text>
        <div>
          <SubTitle>Overview</SubTitle>
          <Text>{overview}</Text>
        </div>
        <div>
          <SubTitle>Genres</SubTitle>
          <Text>{genreList}</Text>
        </div>
        <div>
          <SubTitle>Duration</SubTitle>
          <Text>{runtime} min</Text>
        </div>
      </WrapInfo>
    </WrapCard>
  );
};
export default MovieCard;

MovieCard.propTypes = {
  movieDetals: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      poster_path: PropTypes.string,
      overview: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
      genres: PropTypes.array,
    })
  ),
};
