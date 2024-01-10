import quizReducer from './../dictionary/quizSlice';
import dictionaryReducer from './../dictionary/dictionarySlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
