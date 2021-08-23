import { db } from './db';
import { ShopCategory, ShopIds } from './models';

export const getShopCategories = async (
  shopId: ShopIds,
): Promise<ShopCategory[]> =>
  (await (await db.shopCategories(shopId)).get()).docs.map((document) =>
    document.data(),
  );
