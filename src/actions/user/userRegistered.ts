import store from 'store';
import { isRegistered } from 'reducers/user';

export default () => {
  store.dispatch(isRegistered(true));
};
