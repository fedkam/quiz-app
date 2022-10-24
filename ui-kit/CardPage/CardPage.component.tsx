import { Card as AntCart } from 'antd';
import { CardProps } from 'antd/lib/card';
import { FC } from 'react';
import styles from './CardPage.module.css';
import cn from 'classnames';

export const CardPage: FC<CardProps> = ({ children, className, ...props }) => (
  <AntCart className={cn(styles.card, className)} {...props}>
    {children}
  </AntCart>
);
