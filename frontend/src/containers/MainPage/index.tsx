'use client';

import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';

import Loader from 'components/Loader';
import PreviewCard from 'components/PreviewCard';
import { CINEMA_FILTER_KEY, GENRE_FILTER_KEY, SEARCH_NAME_FILTER_KEY } from 'constants/filter.constants';
import { useGetFilmsQuery } from 'redux/slice/api/films-slice.api';
import { TCinemas } from 'src/types/film.type';

import Filters from './Filters';
import styles from './styles.module.scss';

type Props = {
  cinemas: TCinemas[]
}

export default function MainPage({ cinemas }: Props) {
  const params = useSearchParams();
  const { data, isFetching } = useGetFilmsQuery({ cinemaId: params.get(CINEMA_FILTER_KEY) ?? undefined });

  const searchNameFilter = (params.get(SEARCH_NAME_FILTER_KEY) ?? '').toLowerCase();
  const genreFilter = (params.get(GENRE_FILTER_KEY) ?? '').toLowerCase();

  const filterFilms = useMemo(() => data?.filter((value) => value.title.toLowerCase().includes(searchNameFilter)
   && (genreFilter ? value.genre === genreFilter : true)), [data, params]);

  return (
    <div className={styles.wrapper}>
      <div>
        <Filters cinemas={cinemas} />
      </div>
      <div className={styles.content}>
        <div className={styles.cardList}>
          {filterFilms?.map((film) => <PreviewCard key={film.id} {...film} />)}
        </div>
        {isFetching && <Loader />}
      </div>
    </div>
  );
}
