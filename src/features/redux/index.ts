import dictionaryReducer from './../dictionary/dictionarySlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { dictionaryReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
