import cn from 'classnames';
import Image from 'next/image';
import React from 'react';

import { GENRE } from 'constants/genre.constants';
import ChangeCountTicket from 'modules/ChangeCountTicket';
import { TFilm } from 'src/types/film.type';

import styles from './styles.module.scss';

type Props = TFilm

export default function FilmCard({
  title, posterUrl, releaseYear, description, genre, id, rating, director,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <div><Image src={posterUrl} alt={title} width={400} height={500} className={styles.image} /></div>
      <div>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <ChangeCountTicket id={id} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}><span className={styles.weight}>Жанр: </span>{GENRE[genre]}</p>
          <p className={styles.text}><span className={styles.weight}>Год выпуска: </span>{releaseYear}</p>
          <p className={styles.text}><span className={styles.weight}>Рейтинг: </span>{rating}</p>
          <p className={styles.text}><span className={styles.weight}>Режиссер: </span>{director}</p>
        </div>
        <p className={cn([styles.text, styles.weight])}>Описание</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
