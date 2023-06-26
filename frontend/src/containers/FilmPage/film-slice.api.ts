'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FILM_API, REVIEW_LIST_API } from 'constants/api.constants';
import { TFilm, TReview } from 'src/types/film.type';


export const filmSliceApi = createApi({
  reducerPath: 'filmSliceApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL}),
  endpoints: (builder) => ({
    getFilm: builder.query<TFilm,{movieId?: string}>({
      query: ({ movieId }) => ({
        url: FILM_API,
        params: { movieId },
      }),
    }),
    getReviews: builder.query<TReview[],{movieId?: string}>({
      query: ({ movieId }) => ({
        url: REVIEW_LIST_API,
        params: { movieId },
      }),
    }),
  }),
});

export const { useGetFilmQuery, useGetReviewsQuery } = filmSliceApi;
