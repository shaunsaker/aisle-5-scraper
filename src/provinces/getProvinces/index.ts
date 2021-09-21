import { ShopRegion, Province } from '../../firebase/models';
import { saveProvinces } from '../../firebase/saveProvinces';
import { getUuid } from '../../utils/getUuid';

// use the woolworths regions
const regions: ShopRegion[] = require('../../woolworths/getRegions/regions.data.json');

// convert them to provinces
const provinces: Province[] = regions.map((region) => ({
  id: getUuid(),
  displayName: region.displayName,
  woolworthsRegionId: region.id,
}));

saveProvinces(provinces);
