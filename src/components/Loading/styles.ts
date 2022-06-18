import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 144px 75px;
  @media (max-width: 360px) {
    padding: 32px;
  }
`;

export const Loading = styled(Image)`
  display: flex;
  margin: 0px auto;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 16px;
  text-align: center;
  font-weight: 500;
`;
