import { getCredits } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Item, Title, Text } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchCast = async () => {
      try {
        const data = await getCredits({ movieId }, 'reviews');
        if (data.results.length === []) {
          throw Error(`No reviews`);
        }
        const reviews = data.results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));

        setReviews(reviews);
      } catch (error) {
        console.log(error);
        setReviews('');
      }
    };
    fetchCast();
  }, [movieId]);

  console.log(reviews);

  if (reviews.length === 0) {
    return <Text>We dont have any reviews for this movie</Text>;
  }

  return (
    <List>
      {reviews?.map(({ id, author, content }) => (
        <Item key={id}>
          <Title>{author}</Title>
          <Text>{content}</Text>
        </Item>
      ))}
    </List>
  );
};

export default Reviews;
