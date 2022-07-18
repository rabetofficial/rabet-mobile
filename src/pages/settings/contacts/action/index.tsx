import AddContact from 'blocks/NavItems/setting/Contacts/ContactAction';

export async function getStaticProps() {
  return {
    props: {
      logged: 2,
      registered: 2,
      account: 2,
    },
  };
}

export default AddContact;
