import Confirm from 'blocks/Op/Basic/Confirm/Swap';

export async function getStaticProps() {
  return {
    props: {
      logged: 2,
      registered: 2,
      account: 2,
    },
  };
}

export default Confirm;
