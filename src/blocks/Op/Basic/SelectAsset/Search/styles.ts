import styled from 'styled-components';

export const InputSearch = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.primary.lighter};
  box-sizing: border-box;
  height: 41px;
  font-size: 14px;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.primary.lighter};
  }

  &::placeholder {
    font-size: 14px;
    color: #afafaf;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;

  &:not(:last-child) {
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.primary.lighter};
  }
`;

export const Asset = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

export const AssetName = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: black;
`;

export const AssetInfo = styled.div`
  font-size: 12px;
  line-height: 1.33;
  color: ${({ theme }) => theme.colors.primary.dark};
`;

export const AssetPrice = styled.div`
  font-size: 14px;
  line-height: 1.43;
  color: black;
`;
