import store from 'store';
import { removeOperation } from 'reducers/transaction';

export default async (id: string) => {
  store.dispatch(removeOperation(id));
};
