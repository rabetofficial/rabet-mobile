import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo';
import Loading from 'components/Loading';

const MediaLoading = styled.div`
  margin-top: -40px;
  @media (max-width: 360px) {
    margin-top: -20px;
  }
`;

const LoadingPage = () => (
  <div className="flex flex-col justify-center items-center h-screen w-screen">
    <Logo />
    <MediaLoading>
      <Loading size={64} />
    </MediaLoading>
  </div>
);

export default LoadingPage;
