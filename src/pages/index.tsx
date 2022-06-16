import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => (
  <div className="text-center">
    <Link href="Home">Home</Link>
    <br />
    <Link href="Intro-slides">Intro</Link>
    <br />
    <Link href="test">test</Link>
    <br />
    <Link href="Create-wallet">Create wallet</Link>
  </div>
);

export default Home;
