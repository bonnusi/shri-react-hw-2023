import Image from 'next/image';
import React from 'react';

import { TReview } from 'src/types/film.type';

import styles from './styles.module.scss';

type Props = TReview

export default function ReviewCard({
  name, text, rating,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <div><Image src="/images/no-avatar.jpg" alt={name} width={100} height={100} className={styles.image} /></div>
      <div>
        <div className={styles.headerContainer}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.text}>Оценка:  <span className={styles.weight}>{rating}</span></p>
        </div>
        <p className={styles.description}>{text}</p>
      </div>
    </div>
  );
}
