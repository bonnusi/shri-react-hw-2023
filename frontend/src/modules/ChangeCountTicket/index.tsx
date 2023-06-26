'use client';

import React, { useCallback, useMemo } from 'react';

import Button from 'components/Button';
import { CloseIcon, MinusIcon, PlusIcon } from 'constants/icons.constants';
import { CART_STORAGE_NAME } from 'constants/local-storage.constants';
import { MODAL_TYPES } from 'constants/modals.constants';
import useLocalStorage from 'hooks/useLocalStorage';
import { useModals } from 'hooks/useModals';

import styles from './styles.module.scss';

type Props = {
  withRemoveIcon?: boolean
  id: string
}

function ChangeCountTicket({ id, withRemoveIcon }: Props) {
  const [cart, setCart] = useLocalStorage<{[key: string]: number}>(CART_STORAGE_NAME, {});
  const { showModal } = useModals();

  const handleAddTicket = useCallback(() => {
    setCart((selectedCart) => {

      if (selectedCart) {
        const newValue = (selectedCart?.[id] ?? 0) + 1;

        return { ...selectedCart, [id]: newValue };
      }

      return { [id]: 1 };
    });
  }, []);

  const handleDeleteFilm = () => {
    showModal(MODAL_TYPES.SUBMIT_MODAL, {
      title: 'Удаление билета',
      description: 'Вы уверены, что хотите удалить билет?',
      onSubmit: () => {
        setCart((selectedCart) => {
          const copyObject = { ...selectedCart };

          delete copyObject?.[id];

          return copyObject;
        });
      },
    });
  };

  const currentValue = useMemo(() => cart?.[id] ?? 0, [cart?.[id]]);

  const handleRemoveTicket = useCallback(() => {
    if (currentValue === 1) {
      handleDeleteFilm();

      return;
    }

    setCart((selectedCart) => {
      const currentValueInCart = selectedCart?.[id];

      if (currentValueInCart) {
        const newValue = currentValueInCart - 1;

        return { ...selectedCart, [id]: newValue };
      }

      return selectedCart;
    });
  }, [currentValue]);

  return (
    <div>
      <div className={styles.wrapper}>
        <Button className={styles.button} disabled={currentValue <= 0} size="small" onClick={handleRemoveTicket}><MinusIcon /></Button>
        <span className={styles.text}>{currentValue}</span>
        <Button className={styles.button} disabled={currentValue >= 30} size="small" onClick={handleAddTicket}><PlusIcon /></Button>
        {withRemoveIcon && <button className={styles.removeButton} onClick={handleDeleteFilm} aria-label="remove"><CloseIcon /></button>}
      </div>
    </div>
  );

}

export default React.memo(ChangeCountTicket);
