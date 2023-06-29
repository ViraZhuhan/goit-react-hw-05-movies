import PropTypes from 'prop-types';
import { Message } from "./ErrorMessage.styled";

export default function ErrorMessage() {
  return (
    <Message>
      <h2>Oops! 😫</h2>
      <p>Movie is not found!</p>
    </Message>
  );
}

ErrorMessage.propTypes = {
  children: PropTypes.node,
}