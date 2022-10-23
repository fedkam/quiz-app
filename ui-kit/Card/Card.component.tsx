import { Card as AntCart } from 'antd';
import { CardProps } from 'antd/lib/card';
import { FC } from 'react';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card: FC<CardProps> = ({ children, className, ...props }) => (
  <AntCart className={cn(styles.card, className)} {...props}>
    {children}
  </AntCart>
);
