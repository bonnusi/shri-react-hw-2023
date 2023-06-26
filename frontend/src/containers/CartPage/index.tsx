'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import Loader from 'components/Loader';
import PreviewCard from 'components/PreviewCard';
import { CART_STORAGE_NAME } from 'constants/local-storage.constants';
import useLocalStorage from 'hooks/useLocalStorage';
import { useGetFilmsQuery } from 'redux/slice/api/films-slice.api';

import styles from './styles.module.scss';

const BottomCount = dynamic(() => import('./BottomCount'), { ssr: false });

export default function CartPage() {

  const { data, isFetching } = useGetFilmsQuery({});
  const [cart] = useLocalStorage<{[key: string]: number}>(CART_STORAGE_NAME, {});

  return (
    <>
      <div className={styles.cardList}>
        {data?.map((film) => (cart[film.id] && (
          <div key={film.id}>
            <PreviewCard {...film} withRemoveIcon />
          </div>
        )))}
      </div>
      <BottomCount />
      {isFetching && <Loader />}
    </>
  );
}
