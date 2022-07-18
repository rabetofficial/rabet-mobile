import FirstPage from 'blocks/FirstPage';

export async function getStaticProps() {
  return {
    props: {
      logged: 2,
      registered: 2,
      account: 0,
    },
  };
}

export default FirstPage;
