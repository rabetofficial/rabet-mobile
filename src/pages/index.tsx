import React from 'react';
import type { NextPage } from 'next';

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

const MainComponent: NextPage = () => <div>ADD TO HOME SCREEN</div>;

export default MainComponent;
