import { ShopDeliveryRegion, ShopIds } from '../../firebase/models';
import { saveShopDeliveryRegions } from '../../firebase/saveShopDeliveryRegions';

// manually get the delivery regions and save them to firestore
// FIXME: we should parse this to ensure the types are correct
const deliveryRegions: ShopDeliveryRegion[] = require('./deliveryRegions.data.json');

saveShopDeliveryRegions(ShopIds.Woolworths, deliveryRegions);
