import store from 'store';
import { set } from 'helpers/storage';
import { addConnectedWebsites } from 'reducers/user';
import { changeIsConnected } from 'reducers/accounts2';

type AddConnectedWebsitesArgs = {
  host: string;
  publicKey: string;
};

export default async ({
  host,
  publicKey,
}: AddConnectedWebsitesArgs): Promise<void> => {
  const { connectedWebsites } = store.getState().user;
  const pair = `${host}/${publicKey}`;

  const newWebsites = [...connectedWebsites, pair];

  store.dispatch(addConnectedWebsites(newWebsites));
  store.dispatch(
    changeIsConnected({
      publicKey,
      isConnected: true,
    }),
  );

  await set('connectedWebsites', newWebsites);
};
