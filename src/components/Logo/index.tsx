import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import logo from 'public/images/text-logo.svg';

const Container = styled.div`
  width: 110px;
  height: 157px;
  display: block;
  margin: 72px auto 0 auto;
`;

const Logo = () => (
  <Container>
    <Image src={logo} alt="logo" />
  </Container>
);

export default Logo;
