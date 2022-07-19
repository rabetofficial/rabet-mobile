import EditWalletName from 'blocks/EditWalletName';

export async function getServerSideProps() {
  return {
    props: {
      logged: 2,
      registered: 2,
      account: 2,
    },
  };
}

export default EditWalletName;
