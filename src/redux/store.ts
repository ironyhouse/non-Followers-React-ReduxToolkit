import { configureStore } from '@reduxjs/toolkit';
import { nonFollowersList } from './nonFollowers-slice';
import { searchForm } from './searchForm-slice';

export const store = configureStore({
  reducer: {
    followers: nonFollowersList,
    search: searchForm,
  },
  devTools: true,
});
