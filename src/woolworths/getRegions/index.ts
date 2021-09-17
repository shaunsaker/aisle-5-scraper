import { ShopRegion, ShopIds } from '../../firebase/models';
import { saveShopRegions } from '../../firebase/saveShopRegions';

// manually get the delivery regions and save them to firestore
// FIXME: we should parse this to ensure the types are correct
const regions: ShopRegion[] = require('./regions.data.json');

saveShopRegions(ShopIds.Woolworths, regions);
