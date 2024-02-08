import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export type Word = {
  id: string;
  original: string;
  translated: string;
  loading: boolean;
};

type Words = {
  words: Word[];
  loading: boolean;
};

const initialState: Words = {
  words: [],
  loading: false,
};

const URL = import.meta.env.VITE_GOOGLE_API_URL;

const options = (text: string) => {
  return {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': import.meta.env.VITE_GOOGLE_ACCESS_KEY,
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    },
    body: new URLSearchParams({
      q: text,
      target: 'ru',
      source: 'en',
    }),
  };
};

export const fetchTranslate = createAsyncThunk<Word, string>(
  'dictionary/fetchTranslate',
  async function (original: string, { rejectWithValue }) {
    try {
      const response = await fetch(URL, options(original));
      const result = await response.json();
      const translated = result.data.translations[0].translatedText;
      const createID = original + translated;
      const completedResult = {
        id: createID,
        original: original.toLocaleLowerCase(),
        translated: translated,
        loading: false,
      };
      return completedResult;
    } catch (error) {}
    return rejectWithValue(Error);
  }
);

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<Word>) => {
      state.words.push(action.payload);
    },
    removeWord: (state, action) => {
      state.words = state.words.filter((word) => {
        return word.id !== action.payload;
      });
    },
    sortWordsByAlphabet: (state, action) => {
      if (action.payload === 'alphabet') {
        state.words = state.words.sort((a, b): number => {
          if (a.original < b.original) {
            return -1;
          }
          return 0;
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTranslate.pending, (state) => {
        state.words.push({
          id: 'loader',
          original: 'translate',
          translated: 'translate',
          loading: true,
        });
        state.loading = true;
      })
      .addCase(fetchTranslate.fulfilled, (state, action) => {
        state.words.pop();
        state.words.push(action.payload);
        state.loading = false;
      });
  },
});

export const { addWord, removeWord, sortWordsByAlphabet } =
  dictionarySlice.actions;
export default dictionarySlice.reducer;
