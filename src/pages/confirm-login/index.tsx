import ConfirmLogin from 'blocks/ConfirmLogin';

export async function getServerSideProps() {
  return {
    props: {
      logged: 0,
      registered: 0,
      account: 0,
    },
  };
}

export default ConfirmLogin;
