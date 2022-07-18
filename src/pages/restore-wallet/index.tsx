import RestoreWallet from 'blocks/RestoreWallet';

export async function getStaticProps() {
  return {
    props: {
      logged: 2,
      registered: 2,
      account: 1,
    },
  };
}

export default RestoreWallet;
