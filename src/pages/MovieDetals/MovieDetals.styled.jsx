import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Links = styled(Link)`
  padding: 4px 12px;
  margin-bottom: 8px;
  border: 4px solid #f0f0f0;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  font-size: 12px;

  @media (min-width: 768px) {
    padding: 8px 16px;
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 26px;
  }

  &:hover {
    color: white;
    background-color: orangered;
  }
`;

export const Text = styled.p`
  margin-top: 16px;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const Item = styled.li`
  margin: 0px;
  margin-top: 4px;
  font-size: 12px;

  @media (min-width: 768px) {
    margin-top: 8px;
    font-size: 16px;
  }
  @media (min-width: 1200px) {
    margin-top: 12px;
    font-size: 24px;
  }
`;
