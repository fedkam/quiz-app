import type { NextPage } from 'next';
import { observer } from 'mobx-react';
import { Layout } from 'components/Layout';
import { Card, Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
import { getCategoty, getQuestions } from 'services';
import { Category, currentQuiz } from 'store/CurrentQuiz';
import { CardPage } from 'ui-kit/CardPage';
import styles from 'styles/Testing.module.css';

const { Title } = Typography;

const ChooseCategoryStep: FC<{ categories: Category[] }> = ({ categories }) => {
  return (
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
};

const TestingStep: FC = () => {
  const {
    category,
    currentQuestionNumber,
    nextQuestion,
    questions,
    setQuestions,
  } = currentQuiz;

  useEffect(() => {
    loadQuestions();
  }, []);

  async function loadQuestions() {
    let result = await getQuestions({ id: category?.id });
    console.log(result);
    setQuestions(result);
  }

  return (
    <>
      <Title style={{ margin: 0 }}>
        {questions.length > 0 ? questions[currentQuestionNumber].question : ''}
      </Title>
    </>
  );
};

const Testing: NextPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    categories.length === 0 && loadCategories();
  });

  async function loadCategories() {
    try {
      let result = await getCategoty({ count: 10 });
      setCategories(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <div className='wrapper-content'>
        <CardPage loading={categories.length === 0}>
          <div className={styles['card-content']}>
            {!currentQuiz.category && (
              <ChooseCategoryStep categories={categories} />
            )}
            {currentQuiz.category && <TestingStep />}
          </div>
        </CardPage>
      </div>
    </Layout>
  );
};

export default observer(Testing);
