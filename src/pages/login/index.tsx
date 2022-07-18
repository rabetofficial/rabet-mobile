import Login from 'blocks/Login';

export async function getStaticProps() {
  return {
    props: {
      logged: 0,
      registered: 2,
      account: 2,
    },
  };
}

export default Login;
