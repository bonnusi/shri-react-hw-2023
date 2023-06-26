import cn from 'classnames';
import React, { memo } from 'react';

import { CaretDownIcon } from 'constants/icons.constants';

import styles from './styles.module.scss';

type Props = {
  title: string
  description: string
  onClick: () => void
  isActive: boolean
}

function AccordionItem({
  title, description, onClick, isActive,
}: Props) {
  return (
    <div
      className={cn([styles.wrapper, { [styles.isActive]: isActive }])}
      role="button"
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.iconWrapper}>
          <CaretDownIcon />
        </div>
      </div>
      <div className={styles.contentBlock}>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default memo(AccordionItem);
