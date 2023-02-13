import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import User from './interfaces';
import { toast } from 'react-toastify';

const initialState: {
  nonFollowersList: User[];
  isLoading: boolean;
} = {
  nonFollowersList: [],
  isLoading: false,
};

export const fetchUserById = createAsyncThunk(
  'nonFollowers/fetchNonFollowers',
  async (username, _) => {
    const response: any = await fetch(
      'https://jsonplaceholder.typicode.com/uses'
    );

    return response.json();
  }
);

const nonFollowersListSlice = createSlice({
  name: 'nonFollowers',
  initialState,
  reducers: {
    setNonFollowersList(state, action): void {
      state.nonFollowersList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.nonFollowersList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUserById.pending, (state, _) => {
      state.isLoading = true;
      state.nonFollowersList = [];
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      if (action.error.message) {
        toast(action.error.message);
      }
      state.isLoading = false;
    });
  },
});

export const { setNonFollowersList } = nonFollowersListSlice.actions;
export const nonFollowersList = nonFollowersListSlice.reducer;
