import Contacts from 'blocks/NavItems/setting/Contacts';

export async function getServerSideProps() {
  return {
    props: {
      logged: 2,
      registered: 2,
      account: 2,
    },
  };
}

export default Contacts;
