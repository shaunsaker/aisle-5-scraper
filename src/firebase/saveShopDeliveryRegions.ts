import { db } from './db';
import { DeliveryRegion, ShopIds } from './models';

export const saveShopDeliveryRegions = async (
  shopId: ShopIds,
  deliveryRegions: DeliveryRegion[],
): Promise<void> => {
  for (const deliveryRegion of deliveryRegions) {
    console.log(`Saving delivery region, ${deliveryRegion.displayName}...`);

    await db
      .shopDeliveryRegions(shopId)
      .doc(deliveryRegion.id)
      .set(deliveryRegion);
  }
};
