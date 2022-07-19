import LoadingNetwork from 'blocks/LoadingNetwork';

export async function getServerSideProps() {
  return {
    props: {
      logged: 1,
      registered: 1,
      account: 1,
    },
  };
}

export default LoadingNetwork;
