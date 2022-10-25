import { Man } from 'components/Rating';
import { action, configure, makeAutoObservable, runInAction } from 'mobx';
import { getCategories } from 'services';
import { Category, Question } from './CurrentQuiz.types';

class CurrentQuiz {
  userName: string = '';
  currentQuestionNumber: number = 0;
  questions: Question[] = [];
  mistakeIds: number[] = [];
  ratingUsers: Man[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUserName = (name: string) => {
    this.userName = name;
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  setCurrentQuestionNumber = (number: number) => {
    this.currentQuestionNumber = number;
  };

  setQuestions = (questions: Question[]) => {
    this.questions = questions;
  };

  addMistakeIds = (id: number) => {
    this.mistakeIds.push(id);
  };

  setRatingUsers = (ratingUsers: Man[]) => {
    this.ratingUsers = ratingUsers;
  };

  nextQuestion = () => {
    this.setCurrentQuestionNumber(this.currentQuestionNumber++);
  };
}

export const currentQuiz = new CurrentQuiz();
