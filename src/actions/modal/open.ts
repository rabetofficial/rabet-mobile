import store from 'store';

import { IModal, openModal } from 'reducers/modal';

type OmitIsOpenModal = Omit<IModal, 'isOpen'>;

const openModalAction = (modalOptions: Required<OmitIsOpenModal>) => {
  store.dispatch(
    openModal({
      ...modalOptions,
      isOpen: true,
    }),
  );
};

export default openModalAction;
