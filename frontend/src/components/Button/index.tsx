import cn from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

type DefaultButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type Props = {
  variant?: 'primary' | 'transparent'
  size?: 'big' | 'small'
} & DefaultButtonProps

export default function Button({
  variant = 'primary', size = 'big', className, children, ...props
}: Props) {

  return (
    <div className={styles.wrapper}>
      <button className={cn([styles.button, styles[variant], styles[size], className])} {...props}>{children}</button>
    </div>
  );

}
