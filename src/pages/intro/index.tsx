import Intro from 'blocks/Intro';

export async function getStaticProps() {
  return {
    props: {
      logged: 0,
      registered: 0,
      account: 0,
    },
  };
}

export default Intro;
