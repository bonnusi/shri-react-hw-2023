'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FILM_LIST_API } from 'constants/api.constants';
import { TFilm } from 'src/types/film.type';

export const globalFilmsSliceApi = createApi({
  reducerPath: 'globalFilmsSliceApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL}),
  endpoints: (builder) => ({
    getFilms: builder.query<TFilm[], {cinemaId?: string}>({
      query: ({ cinemaId }) => ({
        url: FILM_LIST_API,
        params: { cinemaId },
      }),
    }),
  }),
});

export const { useGetFilmsQuery } = globalFilmsSliceApi;
