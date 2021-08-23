import { db } from './db';
import { ShopCategory, ShopIds } from './models';

export const saveShopCategories = async (
  shopId: ShopIds,
  categories: ShopCategory[],
): Promise<void> => {
  for (const category of categories) {
    console.log(`Saving category, ${category.displayName}...`);

    await db.shopCategories(shopId).doc(category.id).set(category);
  }
};
