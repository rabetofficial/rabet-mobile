/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

export const AccountContainer = styled.div`
  max-height: 245px;
  min-height: 230px;
  padding-top: 10px;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  max-height: 210px;
  overflow-y: scroll;

  > li {
    padding-left: 16px;
  }
`;

export const Border = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  height: 0.5px;
  width: 100%;
`;

export const NotFound = styled.span`
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primary.dark};
  display: block;
  margin: 0 auto;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0px 16px;
`;

export const Avatar = styled.div`
  background-color: #c9e6ff;
  color: #395dc5;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  font-size: 14px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`;

export const Amount = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.primary.dark};
`;
export const ImageContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 28px;
    height: auto;
    border-radius: 50%;
  }
`;

export const Host = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: black;
  padding: 4px 8px;
`;
