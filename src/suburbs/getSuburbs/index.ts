import { getProvinces } from '../../firebase/getProvinces';
import { Suburb } from '../../firebase/models';
import { saveSuburbs } from '../../firebase/saveSuburbs';
import { getUuid } from '../../utils/getUuid';
import { SuburbsData } from '../../woolworths/getSuburbs';

const getSuburbs = async () => {
  // use the woolworths suburbs
  const suburbsData: SuburbsData = require('../../woolworths/getSuburbs/suburbs.data.json');

  // get the provinces
  const provinces = await getProvinces();

  const suburbs: Suburb[] = [];

  // convert them to suburbs
  suburbsData.forEach((regionData) => {
    regionData.suburbs.forEach((suburbData) => {
      const provinceId = provinces.find(
        (province) => province.woolworthsRegionId === regionData.id,
      ).id;

      const suburb: Suburb = {
        id: getUuid(),
        displayName: suburbData.name,
        postalCode: suburbData.postalCode,
        provinceId,
        woolworthsSuburbId: suburbData.id,
      };

      suburbs.push(suburb);
    });
  });

  await saveSuburbs(suburbs);
};

getSuburbs();
