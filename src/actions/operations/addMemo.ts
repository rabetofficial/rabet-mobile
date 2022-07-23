import store from 'store';
import { addMemo, Memo } from 'reducers/transaction';

export default (memo: Memo) => {
  store.dispatch(addMemo(memo));
};
