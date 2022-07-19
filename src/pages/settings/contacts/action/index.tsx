import AddContact from 'blocks/NavItems/setting/Contacts/ContactAction';

export async function getServerSideProps() {
  return {
    props: {
      logged: 2,
      registered: 2,
      account: 2,
    },
  };
}

export default AddContact;
