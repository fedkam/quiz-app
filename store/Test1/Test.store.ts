import { makeAutoObservable } from 'mobx';

class Test {
  counter: number = 0;
  inputStr: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.counter++;
  };

  decrement = () => {
    this.counter--;
  };

  editStr = (str: string) => {
    console.log(str);
    this.inputStr = str;
  };

  //   load(url: string) {
  //     fetch(url)
  //       .then((resp) => resp.json())
  //       .then((tds: Todo[]) => (store.todos = tds));
  //   }
}

export const testStore = new Test();
