import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  username: string;
  userURL: string;
} = {
  username: '',
  userURL: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserURL(state, action): void {
      const baseURL = 'https://www.instagram.com/';
      const userURL: URL = new URL(action.payload, baseURL);

      state.username = action.payload;
      state.userURL = userURL.href;
    },
  },
});

export const { setUserURL } = userSlice.actions;
export const user = userSlice.reducer;
