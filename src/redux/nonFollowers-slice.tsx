import { createSlice } from '@reduxjs/toolkit';
import User from './interfaces';

const initialState: {
  nonFollowersList: User[];
} = {
  nonFollowersList: [],
};

const nonFollowersListSlice = createSlice({
  name: 'nonFollowersList',
  initialState,
  reducers: {
    setNonFollowersList(state, action): void {
      state.nonFollowersList = action.payload;
    },
  },
});

export const { setNonFollowersList } = nonFollowersListSlice.actions;
export const nonFollowersList = nonFollowersListSlice.reducer;
