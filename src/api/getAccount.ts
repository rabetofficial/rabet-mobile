import { AccountResponse, Server } from 'stellar-sdk';

import currentNetwork from 'utils/currentNetwork';

export type GetAccountResult = AccountResponse | null;

const getAccount = async (
  publicKey: string,
): Promise<GetAccountResult> => {
  const serverURL = currentNetwork().url;

  const server = new Server(serverURL);

  try {
    const account = await server.loadAccount(publicKey);

    return account;
  } catch (err) {
    return null;
  }
};

export default getAccount;
