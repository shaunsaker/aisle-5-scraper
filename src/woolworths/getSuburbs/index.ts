import { ShopIds, ShopSuburb } from '../../firebase/models';
import { saveShopSuburbs } from '../../firebase/saveShopSuburbs';

// manually get the suburbs and save them to firestore
// FIXME: we should parse this to ensure the types are correct
const suburbsData: {
  suburbs: { postalCode: string; name: string; id: string }[];
  id: string;
}[] = require('./suburbs.data.json');

const suburbs: ShopSuburb[] = [];

suburbsData.forEach((regionData) => {
  regionData.suburbs.forEach((suburbData) => {
    const suburb: ShopSuburb = {
      id: suburbData.id,
      regionId: regionData.id,
      displayName: suburbData.name,
      postalCode: suburbData.postalCode,
    };

    suburbs.push(suburb);
  });
});

saveShopSuburbs(ShopIds.Woolworths, suburbs);
