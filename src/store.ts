import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import nonFollowersReducer from './features/NonFollowers/nonFollowersSlice';

export const store = configureStore({
  reducer: {
    counter: nonFollowersReducer,
  },
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
