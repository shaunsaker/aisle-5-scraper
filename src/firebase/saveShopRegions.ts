import { db } from './db';
import { ShopRegion, ShopIds } from './models';

export const saveShopRegions = async (
  shopId: ShopIds,
  regions: ShopRegion[],
): Promise<void> => {
  for (const deliveryRegion of regions) {
    console.log(`Saving delivery region, ${deliveryRegion.displayName}...`);

    await db.shopRegions(shopId).doc(deliveryRegion.id).set(deliveryRegion);
  }
};
