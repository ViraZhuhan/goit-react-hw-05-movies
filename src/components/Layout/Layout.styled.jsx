import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const NavLinks = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
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

  &.active {
    color: white;
    background-color: orangered;
  }
`;
