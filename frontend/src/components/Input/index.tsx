import cn from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

type DefaultInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Props = DefaultInputProps

export default function Input({ className, ...props }: Props) {

  return (<input className={cn([styles.input, className])} {...props} />);

}
