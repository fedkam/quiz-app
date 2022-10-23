import { FC } from 'react';
import styles from './Rating.module.css';
import { Divider } from 'antd';
import { Typography } from 'antd';
import { RatingProps, Man } from './Rating.types';

const { Title, Text } = Typography;

const Champion: FC<Man> = ({ score, name, category }) => (
  <>
    <Text>{score}</Text>
    <Text>{name}</Text>
    <Text>{category}</Text>
  </>
);

export const Rating: FC<RatingProps> = ({ topPeople, currentUser }) => {
  if (topPeople.length === 0) return <></>;
  return (
    <div className={styles.wrapper}>
      <Title level={4}>🏆 CHAMPIONS 🏆</Title>
      <div className={styles.champion}>
        <Text strong>Score</Text>
        <Text strong>Name</Text>
        <Text strong>Category</Text>
        {topPeople.map((el, idx) => (
          <Champion key={`${el.name}${idx}`} {...el} />
        ))}
      </div>
    </div>
  );
};
