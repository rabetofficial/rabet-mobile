import ChooseBrowser from 'blocks/chooseBrowser';

export async function getServerSideProps() {
  return {
    props: {
      logged: 0,
      registered: 0,
      account: 0,
      before_pwa: true,
    },
  };
}

export default ChooseBrowser;
