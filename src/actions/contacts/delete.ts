import store from 'store';
import { deleteOne, Contact } from 'reducers/contacts';

import storeContacts from './store';

const deleteContactAction = (contact: Contact) => {
  store.dispatch(deleteOne(contact));

  storeContacts();
};

export default deleteContactAction;
