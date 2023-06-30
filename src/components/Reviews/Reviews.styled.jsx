import styled from '@emotion/styled';

export const List = styled.ul`
padding: 0px;
display: flex;
flex-direction: column
gap: 16px;
flex-wrap: wrap;
`;

export const Item = styled.li`
  padding: 8px 10px;
  list-style: none;
  text-align: left;
`;

export const Title = styled.h2`
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const Text = styled.p`
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