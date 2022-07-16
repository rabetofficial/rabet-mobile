import { configureStore } from '@reduxjs/toolkit';

import reducers from 'reducers';

export function makeStore() {
  return configureStore({
    reducer: reducers,
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
