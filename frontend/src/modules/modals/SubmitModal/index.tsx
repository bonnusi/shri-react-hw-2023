import React from 'react';

import Button from 'components/Button';
import { CloseIcon } from 'constants/icons.constants';

import styles from './styles.module.scss';
import ModalWrapper from '../components/ModalWrapper';

type Props = {
  title: string;
  description: string;
  onClose: () => void;
  onSubmit: () => void;
}

export default function SubmitModal({
  title, description, onSubmit, onClose,
}: Props) {

  const handleSubmit = () => {
    onSubmit();
    onClose();
  };

  return (
    <ModalWrapper>
      <div className={styles.wrapper}>
        <div className={styles.header}><h3 className={styles.title}>{title}</h3>
          <button onClick={onClose} className={styles.icon} aria-label="close-icon"><CloseIcon /></button>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonList}>
          <Button className={styles.button} onClick={handleSubmit}>Да</Button>
          <Button className={styles.button} variant="transparent" onClick={onClose}>Нет</Button>
        </div>
      </div>
    </ModalWrapper>
  );
}
