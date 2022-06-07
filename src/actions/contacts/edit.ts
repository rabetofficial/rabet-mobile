import store from 'store';
import { editOne, Contact } from 'reducers/contacts';

import storeContacts from './store';

const editContactAction = (
  oldContact: Contact,
  newContact: Contact,
) => {
  store.dispatch(
    editOne({
      oldContact,
      newContact,
    }),
  );

  storeContacts();
};

export default editContactAction;
