import React from 'react';
import type { NextPage } from 'next';

import useTypedSelector from 'hooks/useTypedSelector';
import Link from 'next/link';

const MainComponent: NextPage = () => {
  const user = useTypedSelector((store) => store.user);

  console.log(user);

  return (
    <div>
      <p>Main Page, doing some changes here. do not change.</p>
      <Link href="/home">Home Page</Link>
    </div>
  );
};

export default MainComponent;
