import { request } from 'http/request';
import { Category, Question } from 'store/ChooseCategory';

const DOMAIN_QUIZ = process.env['NEXT_PUBLIC_DOMAIN_QUIZ'];

export async function getCategories({ count = 0 }): Promise<Category[]> {
  return request(`${DOMAIN_QUIZ}/api/categories?count=${count}`);
}

export async function getQuestions({ id = 0 }): Promise<{ clues: Question[] }> {
  return request(`${DOMAIN_QUIZ}/api/category?id=${id}`);
}
