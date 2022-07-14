import Login from 'blocks/Login';

export async function getStaticProps() {
  return {
    props: {
      role: 'before-login',
    },
  };
}

export default Login;
