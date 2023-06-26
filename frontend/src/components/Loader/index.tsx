import cn from 'classnames';
import React, { memo } from 'react';

import styles from './styles.module.scss';

type Props = {
  className?: string,
  classNameWrapper?: string,
}

function Loader({ className, classNameWrapper }: Props) {
  return (
    <div className={cn([styles.loaderWrapper, classNameWrapper])}>
      <div className={cn([styles.loader, className])} />
    </div>
  );
}

export default memo(Loader);
