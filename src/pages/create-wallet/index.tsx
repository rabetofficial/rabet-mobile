import CreateWallet from 'blocks/CreateWallet';

export async function getServerSideProps() {
  return {
    props: {
      logged: 2,
      registered: 2,
      account: 1,
    },
  };
}

export default CreateWallet;
