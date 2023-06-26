'use client';

import React, { useCallback, useState } from 'react';

import AccordionItem from './AccordionItem';
import { FAQ_CONTENT } from './constants';
import styles from './styles.module.scss';

export default function FAQPage() {
  const [activeIndexList, setActiveIndexList] = useState<number[]>([]);

  const handleChangeActive = useCallback((index: number) => {
    setActiveIndexList((currentIndexList) => {

      if (currentIndexList.includes(index)) {
        const filtered = currentIndexList.filter((currentIndex) => currentIndex !== index);

        return filtered;
      }

      currentIndexList.push(index);

      return [...currentIndexList];
    });
  }, []);

  return (
    <div>
      <h2 className={styles.title}>Вопросы-ответы</h2>
      <div className={styles.accordion}>
        {FAQ_CONTENT.map((accordionItem, index) => (
          <AccordionItem
            key={accordionItem.title}
            onClick={() => handleChangeActive(index)}
            isActive={activeIndexList.includes(index)}
            {...accordionItem}
          />
        ))}
      </div>
    </div>
  );
}
