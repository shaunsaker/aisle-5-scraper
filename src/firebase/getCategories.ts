import { db } from './db';
import { Category } from './models';

export const getCategories = async (): Promise<Category[]> =>
  (await (await db.categories).get()).docs.map((document) => document.data());
