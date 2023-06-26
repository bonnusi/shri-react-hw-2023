'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';

import Input from 'components/Input';
import Select from 'components/Select';
import { CINEMA_FILTER_KEY, GENRE_FILTER_KEY, SEARCH_NAME_FILTER_KEY } from 'constants/filter.constants';
import { GENRE } from 'constants/genre.constants';
import { useDebounce } from 'hooks/useDebounce';
import { useUpdateEffect } from 'hooks/useUpdateEffect';
import { TCinemas } from 'src/types/film.type';

import styles from './styles.module.scss';

const GENRE_OPTIONS = Object.keys(GENRE).map((key) => ({
  value: key,
  label: GENRE[key],
}));

type Props = {
  cinemas: TCinemas[]
}

function Filters({ cinemas }: Props) {
  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState<string>(searchParams.get(SEARCH_NAME_FILTER_KEY) ?? '');
  const [genreValue, setGenreValue] = useState<string>(searchParams.get(GENRE_FILTER_KEY) ?? '');
  const [cinemaValue, setCinemaValue] = useState<string>(searchParams.get(CINEMA_FILTER_KEY) ?? '');

  const debouncedValue = useDebounce<string>(searchValue, 500);
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const changeUrlParams = (keyParams: string, valueParams: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(keyParams, valueParams);
    router.push(`${pathname}?${params.toString()}`);
  };

  useUpdateEffect(() => {
    changeUrlParams(SEARCH_NAME_FILTER_KEY, debouncedValue);
  }, [debouncedValue]);

  const handleChangeGenre = (value: string) => {
    setGenreValue(value);
    changeUrlParams(GENRE_FILTER_KEY, value);
  };

  const handleChangeCinema = (value: string) => {
    setCinemaValue(value);
    changeUrlParams(CINEMA_FILTER_KEY, value);
  };

  const cinemaOptions = cinemas.map((cinema) => ({
    value: cinema.id,
    label: cinema.name,
  }));

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Фильтр поиска</p>
      <div className={styles.inputWrapper}>
        <p className={styles.label}>Название</p>
        <Input value={searchValue} placeholder="Введите название" onChange={handleChange} />
      </div>
      <div className={styles.inputWrapper}>
        <p className={styles.label}>Жанр</p>
        <Select selectValue={genreValue} placeholder="Выберите жанр" onChange={handleChangeGenre} options={GENRE_OPTIONS} />
      </div>
      <div className={styles.inputWrapper}>
        <p className={styles.label}>Кинотеатр</p>
        <Select selectValue={cinemaValue} placeholder="Выберите кинотеатр" onChange={handleChangeCinema} options={cinemaOptions} />
      </div>
    </div>
  );
}

export default React.memo(Filters);
