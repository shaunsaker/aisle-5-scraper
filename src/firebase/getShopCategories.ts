import { db } from './db';
import { Category, ShopIds } from './models';

export const getShopCategories = async (shopId: ShopIds): Promise<Category[]> =>
  (await (await db.shopCategories(shopId)).get()).docs.map((document) =>
    document.data(),
  );
