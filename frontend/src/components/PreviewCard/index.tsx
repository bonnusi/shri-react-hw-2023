import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { GENRE } from 'constants/genre.constants';
import { FILM_URL } from 'constants/links.constants';
import { TFilm } from 'src/types/film.type';

import styles from './styles.module.scss';
import ChangeCountTicket from '../../modules/ChangeCountTicket';

type Props = {
  withRemoveIcon?: boolean
} & TFilm

function PreviewCard({
  title, id, posterUrl, genre, withRemoveIcon = false,
}: Props) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} alt={title} src={posterUrl} width={100} height={120} />
      </div>
      <div>
        <Link href={`${FILM_URL}/${id}`}><h2 className={styles.title}>{title}</h2></Link>
        <p className={styles.description}>{GENRE[genre]}</p>
      </div>
      <ChangeCountTicket id={id} withRemoveIcon={withRemoveIcon} />
    </div>
  );
}

export default React.memo(PreviewCard);
