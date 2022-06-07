import store from 'store';
import { clearMemo, clearOperations } from 'reducers/transaction';

export default () => {
  store.dispatch(clearMemo());
  store.dispatch(clearOperations());
};
