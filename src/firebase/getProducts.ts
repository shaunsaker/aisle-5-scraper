import { db } from './db';
import { Product } from './models';

export const getProducts = async (): Promise<Product[]> =>
  (await (await db.products).get()).docs.map((document) => document.data());
