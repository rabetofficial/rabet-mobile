import ChooseBrowser from 'blocks/chooseBrowser';

export async function getServerSideProps() {
  return {
    props: {
      logged: 1,
      registered: 1,
      account: 1,
      before_pwa: true,
      wrong_browser: true,
    },
  };
}

export default ChooseBrowser;
