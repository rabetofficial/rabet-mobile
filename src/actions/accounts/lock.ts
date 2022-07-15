import store from 'store';
import { logout } from 'reducers/user';
import { stop } from 'reducers/interval';

export default () => {
  store.dispatch(logout());
  store.dispatch(stop());
};
