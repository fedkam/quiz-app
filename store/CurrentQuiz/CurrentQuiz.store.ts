import { Man } from 'components/Rating';
import { action, configure, makeAutoObservable, runInAction } from 'mobx';
import { getInfo, getInfoError } from 'services/Test1';
import { Category, Question } from './CurrentQuiz.types';

class CurrentQuiz {
  name: string = '';
  category: Category | null = null;
  currentQuestion: number = 0;
  questions: Question[] | null = null;
  mistakeIds: number[] = [];
  ratingUsers: Man[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setName = (name: string) => {
    this.name = name;
  };

  setCategory = (category: Category | null) => {
    this.category = category;
  };

  setCurrentQuestion = (number: number) => {
    this.currentQuestion = number;
  };

  setQuestions = (questions: Question[] | null) => {
    this.questions = questions;
  };

  addMistakeIds = (id: number) => {
    this.mistakeIds.push(id);
  };

  setRatingUsers(ratingUsers: Man[]) {
    this.ratingUsers = ratingUsers;
  }

  nextQuestion = () => {
    this.setCurrentQuestion(this.currentQuestion++);
  };
}

export const currentQuiz = new CurrentQuiz();
