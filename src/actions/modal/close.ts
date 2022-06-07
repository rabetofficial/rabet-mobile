import store from 'store';

import { closeModal } from 'reducers/modal';

const openModalAction = () => {
  store.dispatch(closeModal());
};

export default openModalAction;
