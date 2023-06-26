'use client';

import React, { useMemo } from 'react';

import { CART_STORAGE_NAME } from 'constants/local-storage.constants';
import useLocalStorage from 'hooks/useLocalStorage';

import styles from './styles.module.scss';

export default function BottomCount() {
  const [cart] = useLocalStorage<{[key: string]: number}>(CART_STORAGE_NAME, {});

  const totalFilms = useMemo(() => Object
    .keys(cart).reduce((previousValue, currentValue) => previousValue + (cart[currentValue] ?? 0), 0), [cart]);

  return (
    <div className={styles.wrapper}>
      Итого билетов: <span>{totalFilms}</span>
    </div>
  );
}
