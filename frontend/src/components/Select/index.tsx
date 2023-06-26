import cn from 'classnames';
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { CaretDownIcon } from 'constants/icons.constants';

import styles from './styles.module.scss';

type Props = {
  options: {
    value: string
    label: string
  }[];
  placeholder: string
  selectValue: string
  onChange: (selectValue: string) => void;
  className?: string
}

export default function Select({
  className, placeholder, selectValue, options, onChange,
}: Props) {
  const [position, setPosition] = useState<{ x: number;y: number;} | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: bounds.x,
      y: bounds.y + bounds.height,
    });
  };

  const handleClose = () => setPosition(null);

  const handleSelectValue = (value: string) => {
    onChange(value);
    handleClose();
  };

  const currentValue = options.find((option) => option.value === selectValue);

  return (
    <>
      <button
        ref={buttonRef}
        onFocus={handleFocus}
        className={cn([styles.button, { [styles.placeholder]: !currentValue?.value }, { [styles.active]: !!position }, className])}
      >
        {currentValue?.value ? currentValue.label : placeholder} <CaretDownIcon />
      </button>
      {position
        && ReactDOM.createPortal(
          <div
            className={styles.selectMenu}
            style={{
              top: position.y,
              left: position.x,
              position: 'fixed',
              paddingTop: 5,
              zIndex: 10,
              width: `${buttonRef.current?.offsetWidth ?? 0}px`,
            }}
          >
            {options.map((option) => (
              <button className={styles.selectItem} key={option.value} onBlur={handleClose} onClick={() => handleSelectValue(option.value)}>
                {option.label}
              </button>
            ))}

          </div>,
          document.body,
        )}
    </>
  );

}
