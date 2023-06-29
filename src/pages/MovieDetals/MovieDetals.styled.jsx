import styled from "@emotion/styled";
import {Link } from 'react-router-dom';

export const Links = styled(Link)`
  padding: 8px 16px;
  margin-bottom: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    color: white;
    background-color: orangered;
  }
`;