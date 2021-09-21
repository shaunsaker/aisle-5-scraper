import { ShopRegion, Province } from '../../firebase/models';
import { saveProvinces } from '../../firebase/saveProvinces';

// use the woolworths regions
const regions: ShopRegion[] = require('../../woolworths/getRegions/regions.data.json');

// convert them to provinces
const provinces: Province[] = regions.map((region) => ({
  ...region,
  woolworthsRegionId: region.id,
}));

saveProvinces(provinces);
