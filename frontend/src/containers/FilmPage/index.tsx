'use client';

import React from 'react';

import Loader from 'components/Loader';

import FilmCard from './FilmCard';
import ReviewCard from './ReviewCard';
import { useGetFilmQuery, useGetReviewsQuery } from './film-slice.api';
import styles from './styles.module.scss';

type Props = {
  movieId: string
}

export default function FilmPage({ movieId }: Props) {
  const { data: movie, isFetching: isMovieFetching } = useGetFilmQuery({ movieId });
  const { data: reviews, isFetching: isReviewsFetching } = useGetReviewsQuery({ movieId });

  return (
    <div className={styles.wrapper}>
      <div className={styles.filmContainer}>
        {movie && <FilmCard {...movie} />}
        {isMovieFetching && <Loader />}
      </div>
      <div className={styles.reviewContainer}>
        {!!reviews?.length && (
          <div className={styles.reviewList}>
            {reviews.map((review) => <ReviewCard key={review.id} {...review} />)}
          </div>
        )}
        {isReviewsFetching && <Loader />}
      </div>
    </div>
  );
}
