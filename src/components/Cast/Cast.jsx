import { getCredits } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {List, Item} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchCast = async () => {
      try {
        const data = await getCredits({ movieId }, 'credits');
        if (data.cast.length === 0) {
          throw Error(`No casts"`);
        }
        const cast = data.cast.map(
          ({ cast_id, profile_path, name, character }) => ({
            cast_id,
            profile_path,
            name,
            character,
          })
        );

        setCast(cast.slice(0, 18));
      } catch (error) {
        console.log(error);
        setCast('');
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <List>
      {cast?.map(({ cast_id, profile_path, name, character }) => (
        <Item key={cast_id}>
          <img
            src={`${
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : 'https://via.placeholder.com/395x574?text=No+Image'
            } `}
            width={100}
            alt={name}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </Item>
      ))}
    </List>
  );
};


export default Cast;