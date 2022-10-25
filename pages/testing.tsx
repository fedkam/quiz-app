import type { NextPage } from 'next';
import { observer } from 'mobx-react';
import { Layout } from 'components/Layout';
import { Card, Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
import { getCategories, getQuestions } from 'services';
import { currentQuiz } from 'store/CurrentQuiz';
import { chooseCategory } from 'store/ChooseCategory';
import { CardPage } from 'ui-kit/CardPage';
import styles from 'styles/Testing.module.css';
import { testing } from 'store/Testing';

const { Title } = Typography;

const ChooseCategoryStep = observer(() => {
  useEffect(() => {
    chooseCategory.categories.length === 0 && chooseCategory.loadCategories();
  }, []);

  return (
    <CardPage loading={chooseCategory.categories.length === 0}>
      <div className={styles['card-content']}>
        <Title style={{ margin: 0 }}>📑 Choose a category</Title>
        <div className={styles['list']}>
          {chooseCategory.categories.map((el) => (
            <Card.Grid
              key={`${el.id}`}
              className={styles['list-item']}
              onClick={() => chooseCategory.setCategory(el)}
            >
              {el.title}
            </Card.Grid>
          ))}
        </div>
      </div>
    </CardPage>
  );
});

const TestingStep = observer(() => {
  const { currentQuestionNumber, nextQuestion, questions, loadQuestions } =
    testing;
  const { category } = chooseCategory;

  useEffect(() => {
    console.log('useEffect', category?.id, questions.length === 0);
    category?.id && questions.length === 0 && loadQuestions(category?.id);
  }, []);

  return (
    <CardPage loading={questions.length === 0}>
      <div className={styles['card-content']}>
        <Title style={{ margin: 0 }}>
          {questions.length > 0
            ? questions[currentQuestionNumber].question
            : ''}
        </Title>
      </div>
    </CardPage>
  );
});

const Testing: NextPage = () => {
  return (
    <Layout>
      <div className='wrapper-content'>
        {!chooseCategory.category && <ChooseCategoryStep />}
        {chooseCategory.category && <TestingStep />}
      </div>
    </Layout>
  );
};

export default observer(Testing);
