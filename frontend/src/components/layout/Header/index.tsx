import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

import { MAIN_URL } from 'constants/links.constants';

import styles from './styles.module.scss';

const Cart = dynamic(() => import('./Cart'),{ ssr: false },);

export default function Header() {

  return (
    <div className={styles.wrapper}>
      <Link href={MAIN_URL} className={styles.link}>Билетопоиск</Link>
      <Cart />
    </div>
  );
}
