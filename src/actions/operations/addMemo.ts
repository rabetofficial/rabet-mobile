import store from 'store';
import { addMemo } from 'reducers/transaction';

export default (memo) => {
  store.dispatch(addMemo(memo));
};
