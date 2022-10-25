import { Man } from 'components/Rating';
import { action, configure, makeAutoObservable, runInAction } from 'mobx';
import { getQuestions } from 'services';
import { Category, Question } from './Testing.types';

class Testing {
  currentQuestionNumber: number = 0;
  questions: Question[] = [];
  mistakeIds: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentQuestionNumber = (number: number) => {
    this.currentQuestionNumber = number;
  };

  addMistakeIds = (id: number) => {
    this.mistakeIds.push(id);
  };

  nextQuestion = () => {
    this.setCurrentQuestionNumber(this.currentQuestionNumber++);
  };

  loadQuestions = async (id: number) => {
    try {
      let result = await getQuestions({ id });
      console.log('loadQuestions', result);
      runInAction(() => {
        this.questions = result.clues;
      });
    } catch (error) {
      console.log('errors in loadCategories()');
    }
  };
}

export const testing = new Testing();
