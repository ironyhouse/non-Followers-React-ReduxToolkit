import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  userURL: string;
  isLoading: boolean;
  isUserURLValid: boolean;
} = {
  userURL: '',
  isLoading: false,
  isUserURLValid: true,
};

const searchSlice = createSlice({
  name: 'searchForm',
  initialState,
  reducers: {
    setUserURL(state, action): void {
      const baseURL = 'https://www.instagram.com/';
      const userURL: URL = new URL(action.payload, baseURL);

      state.userURL = userURL.href;
    },
    toggleLoading(state, action): void {
      state.isLoading = action.payload;
    },
    toggleUserURLValidation(state, action): void {
      state.isUserURLValid = action.payload;
    },
  },
});

export const { setUserURL, toggleLoading, toggleUserURLValidation } = searchSlice.actions;
export const searchForm = searchSlice.reducer;
