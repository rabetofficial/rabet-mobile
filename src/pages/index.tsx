import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => (
  <>
    <Link href="Home">Home</Link>
    <br />
    <Link href="Intro-slides">Navigate to Intro</Link>
  </>
);

export default Home;
