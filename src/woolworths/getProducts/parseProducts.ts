import { Product } from '../../firebase/models';
import { ScrapedProduct } from './models';

const splitOnDigitRegex = / (?=\d+)/;

export const getDisplayNameFromScrapedDisplayName = (
  scrapedDisplayName: string,
): string => scrapedDisplayName.split(splitOnDigitRegex)[0];

export const getQuantityValueFromScrapedDisplayName = (
  scrapedDisplayName: string,
): number => {
  const stringParts = scrapedDisplayName.split(splitOnDigitRegex);

  const isQuantityRange = stringParts.length > 2;
  if (isQuantityRange) {
    // calculate the average weight between the range
    const rangeFrom = parseInt(stringParts[1].split(' ')[0]);
    const rangeTo = parseInt(stringParts[2].split(' ')[0]);
    const average = rangeFrom + (rangeTo - rangeFrom) / 2;

    return average;
  }

  const isSingleUnit = stringParts.length === 1;
  if (isSingleUnit) {
    return 1;
  }

  return parseInt(stringParts[1]);
};

export const getQuantityUnitFromScrapedDisplayName = (
  scrapedDisplayName: string,
): string => {
  const stringParts = scrapedDisplayName.split(splitOnDigitRegex);

  const isSingleUnit = stringParts.length === 1;
  if (isSingleUnit) {
    return 'pk';
  }

  return stringParts[1]?.split(' ')[1];
};

export const parseProducts = (scrapedProducts: ScrapedProduct[]): Product[] => {
  return scrapedProducts.map((scrapedProduct) => {
    console.log({ scrapedProduct });
    const scrapedDisplayName =
      scrapedProduct.displayName || scrapedProduct.altDisplayName;
    const displayName =
      getDisplayNameFromScrapedDisplayName(scrapedDisplayName);
    const quantityValue =
      getQuantityValueFromScrapedDisplayName(scrapedDisplayName);
    const quantityUnit =
      getQuantityUnitFromScrapedDisplayName(scrapedDisplayName);

    return {
      id: scrapedProduct.id,
      displayName,
      price: scrapedProduct.price,
      quantity: {
        value: quantityValue,
        unit: quantityUnit,
      },
    };
  });
};
