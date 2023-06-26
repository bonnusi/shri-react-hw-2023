import React, { ReactElement, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { useLockedBody } from 'hooks/useLockedBody';

import styles from './styles.module.scss';

type Props = {
  children: ReactElement
}

export default function ModalWrapper({ children }: Props) {
  const [locked, setLocked] = useState(false);

  useLockedBody(locked);

  useEffect(() => {
    setLocked(true);

    return () => setLocked(true);
  }, []);

  return (
    createPortal(
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {children}
        </div>
      </div>,
      document.body,
    )
  );
}
