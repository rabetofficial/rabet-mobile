import { configureStore } from '@reduxjs/toolkit';

import rootReducers from './reducers';

const makeStore = () =>
  configureStore({
    reducer: rootReducers,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];

export default makeStore();
