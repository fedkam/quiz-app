import { Button as AntButton, ButtonProps } from 'antd';
import { FC } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => (
  <AntButton className={cn(styles['custom-button'], className)} {...props}>
    {children}
  </AntButton>
);
