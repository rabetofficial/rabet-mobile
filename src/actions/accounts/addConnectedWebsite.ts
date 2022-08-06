import store from 'store';
import { set } from 'helpers/storage';
import { addConnectedWebsites } from 'reducers/user';

type AddConnectedWebsitesArgs = {
  host: string;
  publicKey: string;
};

export default async ({
  host,
  publicKey,
}: AddConnectedWebsitesArgs): Promise<boolean> => {
  const { connectedWebsites } = store.getState().user;
  const pair = `${host}/${publicKey}`;

  if (!connectedWebsites.includes(pair)) {
    const newWebsites = [...connectedWebsites, pair];

    store.dispatch(addConnectedWebsites(newWebsites));

    await set('connectedWebsites', newWebsites);
  }

  return true;
};
