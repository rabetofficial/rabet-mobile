import store from 'store';
import { changeOperation } from 'reducers/transaction';

export default async (id: string, values: any) => {
  store.dispatch(
    changeOperation({
      id,
      values,
    }),
  );
};
