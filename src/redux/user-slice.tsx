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
    setUsername (state, action): void {
      state.username = action.payload;
    }
  },
});

export const { setUsername } = userSlice.actions;
export const userInfo = userSlice.reducer;
