// import { NavigateFunction } from 'react-router-dom';

import store from 'store';
import { set } from 'helpers/storage';
import { logout } from 'reducers/user';
import { stop } from 'reducers/interval';
import RouteName from 'staticRes/routes';

export default (navigate: any) => {
  store.dispatch(logout());
  store.dispatch(stop());

  set('timer', {});

  navigate(RouteName.Setting, {
    state: {
      hadLogged: false,
    },
  });
};
