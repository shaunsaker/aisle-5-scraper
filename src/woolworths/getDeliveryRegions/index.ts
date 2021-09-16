import { DeliveryRegion, ShopIds } from '../../firebase/models';
import { saveShopDeliveryRegions } from '../../firebase/saveShopDeliveryRegions';

// manually get the delivery regions and save them to firestore
const deliveryRegions: DeliveryRegion[] = require('./deliveryRegions.data.json');

saveShopDeliveryRegions(ShopIds.Woolworths, deliveryRegions);
