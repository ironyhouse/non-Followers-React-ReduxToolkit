import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import User from './interfaces';
import { toast } from 'react-toastify';

const initialState: {
  nonFollowersList: User[];
  isLoading: boolean;
  error: string | null;
} = {
  nonFollowersList: [],
  isLoading: false,
  error: null
};

export const fetchUserById = createAsyncThunk(
  'nonFollowers/fetchNonFollowers',
  async (userURL: URL, _) => {
    const response: Promise<User[]> = await fetch(
      'https://jsonplaceholder.typicode.com/users'
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
      state.nonFollowersList = [];
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.isLoading = false;
      // state.error = action.payload || action.meta.error;
    });
  },
});

export const { setNonFollowersList } = nonFollowersListSlice.actions;
export const nonFollowersList = nonFollowersListSlice.reducer;





async function getNumberOfMovies(substr) {
    let endpoint = `https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${substr}`;

    let total = await fetch(endpoint)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((response) => {
            return response.data.length;
        })

    console.log(total)

    return total
}