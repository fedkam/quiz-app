import type { NextPage } from 'next';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { Layout } from 'components/Layout';
import { Card, Spin, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { getCategoty } from 'services';
import { Category, currentQuiz } from 'store/CurrentQuiz';
import { CardPage } from 'ui-kit/CardPage';
import styles from 'styles/Testing.module.css';

const { Title } = Typography;

const Testing: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    categories.length === 0 && loadCategories();
  }, []);

  async function loadCategories() {
    setIsLoading(true);
    let result = await getCategoty({ count: 10 });
    setCategories(result);
    setIsLoading(false);
  }

  const ChooseCategory = (
    <>
      <Title style={{ margin: 0 }}>Choose a category</Title>
      <div className={styles['list']}>
        {categories.length !== 0 &&
          categories.map((el) => (
            <Card.Grid
              key={`${el.id}`}
              className={styles['list-item']}
              onClick={() => currentQuiz.setCategory(el)}
            >
              {el.title}
            </Card.Grid>
          ))}
      </div>
    </>
  );

  return (
    <Layout>
      <div className='wrapper-content'>
        <CardPage loading={isLoading}>
          <div className={styles['card-content']}>
            {!currentQuiz.category && ChooseCategory}
          </div>
        </CardPage>
      </div>
    </Layout>
  );
};

export default observer(Testing);
