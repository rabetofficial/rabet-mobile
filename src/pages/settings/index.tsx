import Settings from 'blocks/NavItems/setting';

export async function getStaticProps() {
  return {
    props: {
      logged: 2,
      registered: 2,
      account: 2,
    },
  };
}

export default Settings;
