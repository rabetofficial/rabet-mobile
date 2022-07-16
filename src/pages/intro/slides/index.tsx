import IntroSlides from 'blocks/IntroSlides';

export async function getStaticProps() {
  return {
    props: {
      role: 'before-register',
    },
  };
}

export default IntroSlides;
