/**
 * Defines and initializes the app store
 *
 * We define the app store separately to allow room for additional reducers
 * and data organization in the future.
 */

import { configureStore } from '@reduxjs/toolkit';

import baconPigsumReducer from './BaconPigsum';

export const store = configureStore({
  reducer: {
    baconPigsum: baconPigsumReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
