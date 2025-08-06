// lib/store.js
import { configureStore } from '@reduxjs/toolkit';
import metaReducer from '@/features/metaSlice';

export const Store = () => {
  return configureStore({
    reducer: {
      meta: metaReducer,
    },
  });
};


export type AppStore = ReturnType<typeof Store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];