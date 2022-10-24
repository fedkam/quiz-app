import type { NextPage } from 'next';
import Head from 'next/head';
import { observer } from 'mobx-react';
import { useCallback, useEffect } from 'react';
import cn from 'classnames';
import { Layout } from 'components/Layout';
import { Typography } from 'antd';
import styles from 'styles/Home.module.css';
import { CardPage } from 'ui-kit/CardPage';
import { Rating } from 'components/Rating';
import { LSController } from 'common/utils/LocalStorageController';
import { currentQuiz } from 'store';
import { Input } from 'ui-kit/Input';
import { Button } from 'ui-kit/Button';
import { useRouter } from 'next/router';

const { Title } = Typography;

const test = [
  {
    name: 'Yasdfsdfn',
    score: 1000,
    category: 'sdfsd sdfsdf',
  },
  {
    name: 'Pya',
    score: 900,
    category: 'dfdfsgsgsdfs',
  },
  {
    name: 'Nysdfda',
    score: 800,
    category: 'sdf',
  },
];

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const ratingFromLS = LSController.getRating();
    currentQuiz.setRatingUsers(ratingFromLS);
  }, []);

  const getTop3People = () => {
    let topPeople = currentQuiz.ratingUsers
      .slice(0)
      .sort((a, b) => b.score - a.score);
    topPeople.length = 3;
    return topPeople;
  };

  return (
    <Layout>
      <div className='wrapper-content'>
        <CardPage>
          <div className={styles['card-content']}>
            <Title style={{ margin: 0 }}>Welcome to Quiz!</Title>
            <Rating
              currentUser={{ name: 'Fed', score: 10, category: 'a' }}
              topPeople={getTop3People()}
            />
            <div className={styles['input-card']}>
              <Title level={4}>What&apos;s your name?</Title>
              <Input
                size='large'
                placeholder='Name'
                value={currentQuiz.userName}
                onChange={(e) =>
                  currentQuiz.setUserName((e.target as HTMLInputElement).value)
                }
              />
              <Button
                onClick={() => router.push('/testing')}
                style={{ width: '100%' }}
                type='primary'
                size='large'
              >
                🦾🤖 Let&apos;s gooooo!
              </Button>
            </div>
          </div>
        </CardPage>
      </div>
    </Layout>
  );
};

export default observer(Home);
