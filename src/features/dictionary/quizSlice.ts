import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Quiz = {
  quizSize: number;
  total: number;
  correctAnswers: number;
  started: boolean;
};

const initialState: Quiz = {
  quizSize: 0,
  total: 0,
  correctAnswers: 0,
  started: false,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    calculateQuizCards: (state: Quiz, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    startQuiz: (state: Quiz, action: PayloadAction) => {},

    correctAnswer: (state: Quiz) => {
      state.correctAnswers += 1;
    },
  },
});

export const { startQuiz, correctAnswer, calculateQuizCards } =
  quizSlice.actions;
export default quizSlice.reducer;
