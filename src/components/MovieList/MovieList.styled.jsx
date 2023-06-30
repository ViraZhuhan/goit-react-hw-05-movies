import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;

  padding: 0px;
  margin-top: 16px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;

 

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(220px, 1fr));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(220px, 1fr));
  }
`;

export const WrapCard = styled.li`
  width: 100%;
  list-style: none;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 63.48%,
    rgba(0, 0, 0, 0.9) 92.16%
  );
  border-radius: 5px;

  &:hover {
    scale: 1.01;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 320px;
  border-radius: 5px;
`;

export const Title = styled.h3`
  padding: 8px 12px;
  margin: 0px;
  color: white;
`;

export const LinkWrap = styled(Link) `
text-decoration: none;
`