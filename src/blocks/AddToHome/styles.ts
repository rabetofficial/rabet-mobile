import styled from 'styled-components';

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;

  p {
    margin-top: 24px;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: center;
  }
`;

export const Hr = styled.hr`
  margin: 31px 0 21px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
`;

interface ListProps {
  listId: string | any;
}

export const List = styled.div<ListProps>`
  display: inline-flex;
  align-items: ${({ listId }) => (listId === '2' ? '' : 'center')};
  justify-content: space-between;
  padding: ${({ listId }) => (listId === '3' ? '18px 0' : '20px 0')};
  span {
    margin-top: ${({ listId }) => (listId === '2' ? '3px' : '0')};
  }
`;

export const Item = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
`;

export const Add = styled.span`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #0275ff;
`;
