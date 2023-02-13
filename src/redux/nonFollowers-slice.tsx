import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
  async (userURL: URL, _) => {
    const response: Promise<User[]> = await fetch(
      'https://jsonplaceholder.typicode.com/users1'
    )
      .then((response) => {
        if (!response.ok) {
          const message = `Bad request: ${response.status}`;
          throw new Error(message);
        }

        return response.json();
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
        return [];
      });

    return response;
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
      state.isLoading = false;
    });
  },
});

export const { setNonFollowersList } = nonFollowersListSlice.actions;
export const nonFollowersList = nonFollowersListSlice.reducer;
