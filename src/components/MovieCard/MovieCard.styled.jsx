import styled from '@emotion/styled';

export const WrapCard = styled.div`
  margin-top: 16px;
  padding: 16px;
  display: flex;
  gap: 16px;
  border: solid #f0f0f0;

  @media (min-width: 768px) {
    gap: 20px;
  }
  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

export const Img = styled.img`
  width: 240px;

  @media (min-width: 768px) {
    width: 300px;
  }
  @media (min-width: 1200px) {
    width: 320px;
  }
`;

export const WrapInfo = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: spase-between;
`;

export const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1200px) {
    font-size: 36x;
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 0px;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  }
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
