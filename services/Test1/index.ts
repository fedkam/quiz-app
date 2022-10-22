import { request } from 'http/request';

type loadInfoT = {
  id: number;
  title: string;
  hunting: number;
};

export async function getInfo(): Promise<loadInfoT[]> {
  return request('https://jservice.io/api/categories?count=1');
}

export async function getInfoError(): Promise<loadInfoT[]> {
  return request('https://jservice.io/api/QWERTY');
}
