import { db } from './db';
import { ShopIds, ShopSuburb } from './models';

export const getShopSuburbs = async (shopId: ShopIds): Promise<ShopSuburb[]> =>
  (await (await db.shopSuburbs(shopId)).get()).docs.map((document) =>
    document.data(),
  );
