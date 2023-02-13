import { configureStore } from '@reduxjs/toolkit';
import { nonFollowersList } from './nonFollowers-slice';
import { userInfo } from './user-slice';

export const store = configureStore({
  reducer: {
    followers: nonFollowersList,
    user: userInfo,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
