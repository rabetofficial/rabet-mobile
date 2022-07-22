import store from 'store';
import { get } from 'helpers/storage';
import { isRegistered, addConnectedWebsites } from 'reducers/user';
import { load, fixUsd } from 'reducers/options';
import { Contact, load as loadContacts } from 'reducers/contacts';

export default async () => {
  try {
    const data = await get('data');
    const options = await get('options');
    const contacts = await get<Contact>('contacts');
    const connectedWebsites = await get<string[]>(
      'connectedWebsites',
    );

    if (connectedWebsites) {
      store.dispatch(addConnectedWebsites(connectedWebsites));
    }

    if (contacts && contacts.length) {
      store.dispatch(loadContacts(contacts));
    }

    if (options) {
      store.dispatch(load(options));
    }

    store.dispatch(fixUsd());

    if (data) {
      store.dispatch(isRegistered(true));

      return true;
    }

    store.dispatch(isRegistered(false));

    return true;
  } catch (e) {
    return false;
  }
};
