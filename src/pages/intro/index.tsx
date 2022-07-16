import Intro from 'blocks/Intro';

export async function getStaticProps() {
  return {
    props: {
      role: 'before-register',
    },
  };
}

export default Intro;
