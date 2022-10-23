import { Input as AntInput, InputProps } from 'antd';
import { FC } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

export const Input: FC<InputProps> = ({ children, className, ...props }) => (
  <AntInput className={cn(styles['custom-input'], className)} {...props}>
    {children}
  </AntInput>
);
