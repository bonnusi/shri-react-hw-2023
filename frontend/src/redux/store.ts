'use client';

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { middlewares, reducers } from './slice';
import thunk from 'redux-thunk';

export const reduxStore = configureStore({
    reducer: combineReducers(reducers),
    middleware: [thunk, ...middlewares],
    preloadedState: {},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch