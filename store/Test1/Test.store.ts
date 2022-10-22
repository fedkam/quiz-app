import { action, configure, makeAutoObservable, runInAction } from 'mobx';
import { getInfo, getInfoError } from 'services/Test1';

type loadInfoT = {
  id: number;
  title: string;
  hunting: number;
};

class Test {
  counter: number = 0;
  inputStr: string = '';
  info: loadInfoT[] = [];
  infoTitle: string = '';

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
    this.inputStr = str;
  };

  setInfoTitle = (title: string) => {
    this.infoTitle = title;
  };

  loadInfo = async () => {
    try {
      const result = await getInfo();
      this.setInfoTitle(result[0].title);
    } catch (error) {
      console.error('errorerrorerrorerror');
    }
    // loadInfoService().then(
    //   (response) => {
    //     this.info = response;
    //   },
    //   (error) => {
    //     console.error('AAAAAAAAAAAAAA');
    //   }
    // );
  };

  loadInfoErro = async () => {
    try {
      const result = await getInfoError();
      runInAction(() => {
        this.infoTitle = result[0].title;
      });
    } catch (error) {
      console.error('errorerrorerrorerror');
    }
  };
}

export const testStore = new Test();
