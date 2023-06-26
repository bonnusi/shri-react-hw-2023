'use client';

import { filmSliceApi } from 'containers/FilmPage/film-slice.api';
import { globalFilmsSliceApi } from './api/films-slice.api';
import { cinemaSliceApi } from 'containers/MainPage/cinema-slice.api';

export const reducers = {
  [globalFilmsSliceApi.reducerPath]: globalFilmsSliceApi.reducer,
  [filmSliceApi.reducerPath]: filmSliceApi.reducer,
  [cinemaSliceApi.reducerPath]: cinemaSliceApi.reducer,
};

export const middlewares = [globalFilmsSliceApi.middleware, filmSliceApi.middleware, cinemaSliceApi.middleware];
