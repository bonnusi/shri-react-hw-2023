'use client';

import Link from 'next/link';
import React, { useMemo } from 'react';

import { CartIcon } from 'constants/icons.constants';
import { CART_URL } from 'constants/links.constants';
import { CART_STORAGE_NAME } from 'constants/local-storage.constants';
import useLocalStorage from 'hooks/useLocalStorage';

import styles from './styles.module.scss';

export default function Cart() {
  const [cart] = useLocalStorage<{[key: string]: number}>(CART_STORAGE_NAME, {});

  const totalFilms = useMemo(() => Object
    .keys(cart).reduce((previousValue, currentValue) => previousValue + (cart[currentValue] ?? 0), 0), [cart]);

  return (
    <Link className={styles.cart} href={CART_URL}>
      <span className={styles.count}>{totalFilms ?? 0}</span> <CartIcon />
    </Link>
  );

}
