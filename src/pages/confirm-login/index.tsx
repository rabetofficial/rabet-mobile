import ConfirmLogin from 'blocks/ConfirmLogin';

export async function getStaticProps() {
  return {
    props: {
      role: 'before-register',
    },
  };
}

export default ConfirmLogin;
