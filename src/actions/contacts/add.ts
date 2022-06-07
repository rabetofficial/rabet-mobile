import store from 'store';
import { add, Contact } from 'reducers/contacts';

import storeContacts from './store';

const addContactAction = (contact: Contact) => {
  store.dispatch(add(contact));

  storeContacts();
};

export default addContactAction;
