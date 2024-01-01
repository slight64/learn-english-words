import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
type Word = {
  id: string;
  original: string;
  translated: string;
};

type Words = {
  words: Word[];
  loading: boolean;
};

const initialState: Words = {
  words: [
    {
      id: 'sada',
      original: 'sada',
      translated: 'sada',
    },
  ],
  loading: false,
};

const URL = 'https://google-translate1.p.rapidapi.com/language/translate/v2';

const options = (text: string) => {
  return {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': 'd3954bebf5msh5e01f3a9ae0d425p1ea8d3jsn269f5e5f7c7f',
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
      console.log(result.data.translations[0].translatedText);
      return {
        id: String(new Date().getMilliseconds),
        original: original,
        translated: result.data.translations[0].translatedText,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<Word>) => {
      state.words.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTranslate.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTranslate.fulfilled, (state, action) => {
        state.words.push(action.payload);
        localStorage.setItem(
          action.payload.original,
          action.payload.translated
        );
        state.loading = false;
      });
  },
});

export const { addWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;
