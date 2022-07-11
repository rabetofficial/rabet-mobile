import ConfirmLogin from 'blocks/ConfirmLogin';

export async function getStaticProps() {
  return {
    props: {
      role: 'before-login',
    },
  };
}

export default ConfirmLogin;
