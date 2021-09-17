import { db } from './db';
import { ShopIds, ShopSuburb } from './models';

export const saveShopSuburbs = async (
  shopId: ShopIds,
  suburbs: ShopSuburb[],
): Promise<void> => {
  for (const suburb of suburbs) {
    console.log(`Saving suburb, ${suburb.displayName}...`);

    await db.shopSuburbs(shopId).doc(suburb.id).set(suburb);
  }
};
