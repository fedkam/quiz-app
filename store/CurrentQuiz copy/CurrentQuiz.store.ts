import { Man } from 'components/Rating';
import { action, configure, makeAutoObservable, runInAction } from 'mobx';
import { getCategories } from 'services';
import { Category, Question } from './CurrentQuiz.types';

class CurrentQuiz {
  userName: string = '';
  category: Category | null = null;
  categories: Category[] = [];
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

  setCategory = (category: Category | null) => {
    this.category = category;
  };

  setCategories = (categories: Category[]) => {
    this.categories = categories;
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

  async loadCategories() {
    this.loading = true;
    try {
      let result = await getCategories({ count: 10 });
      runInAction(() => {
        this.categories = result;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
      console.log('errors in loadCategories()');
    }
  }
}

export const currentQuiz = new CurrentQuiz();
