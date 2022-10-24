import { request } from 'http/request';
import { Category } from 'store/CurrentQuiz';

const DOMAIN_QUIZ = process.env['NEXT_PUBLIC_DOMAIN_QUIZ'];

export async function getCategoty({ count = 0 }): Promise<Category[]> {
  return request(`${DOMAIN_QUIZ}/api/categories?count=${count}`);
}
