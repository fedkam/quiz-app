import { Man } from 'components/Rating';
import { action, configure, makeAutoObservable, runInAction } from 'mobx';
import { getCategories } from 'services';
import { Category, Question } from './ChooseCategory.types';

class ChooseCategoryStore {
  category: Category | null = null;
  categories: Category[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCategory = (category: Category | null) => {
    this.category = category;
  };

  setCategories = (categories: Category[]) => {
    this.categories = categories;
  };

  loadCategories = action(async () => {
    try {
      let result = await getCategories({ count: 10 });
      runInAction(() => {
        this.categories = result;
      });
    } catch (error) {
      console.log('errors in loadCategories()');
    }
  });
}

export const chooseCategory = new ChooseCategoryStore();
