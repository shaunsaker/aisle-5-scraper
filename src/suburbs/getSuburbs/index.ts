import { Suburb } from '../../firebase/models';
import { saveSuburbs } from '../../firebase/saveSuburbs';
import { getUuid } from '../../utils/getUuid';
import { SuburbsData } from '../../woolworths/getSuburbs';

// use the woolworths suburbs
const suburbsData: SuburbsData = require('../../woolworths/getSuburbs/suburbs.data.json');

const suburbs: Suburb[] = [];

// convert them to suburbs
suburbsData.forEach((regionData) => {
  regionData.suburbs.forEach((suburbData) => {
    const suburb: Suburb = {
      id: getUuid(),
      displayName: suburbData.name,
      postalCode: suburbData.postalCode,
      provinceId: regionData.id, // FIXME: we should map this to our provinces, this is a cheat
      woolworthsSuburbId: suburbData.id,
    };

    suburbs.push(suburb);
  });
});

saveSuburbs(suburbs);
