import store from 'store';
import { set } from 'helpers/storage';
import { addConnectedWebsites } from 'reducers/user';

type RemoveConnectedWebsitesArgs = {
  host: string;
  publicKey: string;
};

export default async ({
  host,
  publicKey,
}: RemoveConnectedWebsitesArgs) => {
  const { connectedWebsites } = store.getState().user;

  const pair = `${host}/${publicKey}`;
  const filtered = connectedWebsites.filter((x) => x !== pair);

  store.dispatch(addConnectedWebsites(filtered));

  await set('connectedWebsites', filtered);
};
