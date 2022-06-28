import styled from 'styled-components';

export const Hr = styled.hr`
  margin: 23.5px 0;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
`;

export const Item = styled.div`
  margin: 24px 0;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.primary.darkest};
`;
export const DifItem = styled(Item)`
  margin: 8px 0;
`;

export const ItemHead = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.primary.dark};
`;

export const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  width: 50px;
  height: 50px;
  border: solid 1px ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.lighter};
    transition: 1s background-color;
  }
`;

export const ContactLinksContainer = styled.div`
  display: inline-flex;
  margin-top: 30px;
`;
