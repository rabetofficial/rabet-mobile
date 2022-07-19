import ChangePassword from 'blocks/NavItems/setting/ChangePassword';

export async function getServerSideProps() {
  return {
    props: {
      logged: 2,
      registered: 2,
      account: 2,
    },
  };
}

export default ChangePassword;
