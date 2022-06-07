import store from 'store';
import { OpType, addOperation } from 'reducers/transaction';

export default async (op: OpType) => {
  store.dispatch(addOperation(op));
};
