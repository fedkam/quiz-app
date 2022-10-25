import { Man } from 'components/Rating';
import { action, configure, makeAutoObservable, runInAction } from 'mobx';
import { getInfo, getInfoError } from 'services/Test1';
import { Category, Question } from './CurrentQuiz.types';

class CurrentQuiz {
  userName: string = '';
  category: Category | null = null;
  currentQuestionNumber: number = 0;
  questions: Question[] = [];
  mistakeIds: number[] = [];
  ratingUsers: Man[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setUserName = (name: string) => {
    this.userName = name;
  };

  setCategory = (category: Category | null) => {
    this.category = category;
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
