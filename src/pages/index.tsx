import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => (
  <div className="text-center">
    <Link href="home">Home</Link>
    <br />
    <Link href="Intro-slides">Intro</Link>
    <br />
    <Link href="test">test</Link>
    <br />
    <Link href="first-page">First page</Link>
  </div>
);

export default Home;
