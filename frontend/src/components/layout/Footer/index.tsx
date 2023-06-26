import Link from 'next/link';
import React from 'react';

import { ABOUT_US_URL, FAQ_URL } from 'constants/links.constants';

import styles from './styles.module.scss';

export default function Footer() {

  return (
    <div className={styles.wrapper}>
      <Link href={FAQ_URL} className={styles.link}>Вопросы-ответы</Link>
      <Link href={ABOUT_US_URL} className={styles.link}>О  нас</Link>
    </div>
  );

}
