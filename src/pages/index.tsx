import React from 'react';
import type { NextPage } from 'next';

import detectOS from 'utils/detectOS';
import AddToHome from 'blocks/AddToHome/indes';

export async function getServerSideProps() {
  return {
    props: {
      logged: 0,
      registered: 0,
      account: 0,
      before_pwa: true,
    },
  };
}

const MainComponent: NextPage = () => {
  const os = detectOS();

  return <AddToHome usage={os} />;
};

export default MainComponent;
