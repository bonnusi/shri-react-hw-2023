'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CINEMAS_API } from 'constants/api.constants';
import { TCinemas } from 'src/types/film.type';


export const cinemaSliceApi = createApi({
  reducerPath: 'cinemaSliceApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL}),
  endpoints: (builder) => ({
    getCinema: builder.query<TCinemas[], undefined>({
      query: () => ({
        url: CINEMAS_API,
      }),
    }),
  }),
});

export const { useGetCinemaQuery } = cinemaSliceApi;
