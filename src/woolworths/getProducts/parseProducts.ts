import { Product } from '../../firebase/models';
import { ScrapedProduct } from './models';

const quantityRegex =
  /(\d*| \d*| \d* (g|kg|ml|l|pk))( )(-|x|\d*| )(\d*| )(\d*|\.)(\d*) (g|kg|ml|l|pk)$/i;

const isQuantityMultiple = (str: string): boolean => /\d\sx\s\d/.test(str);

const isQuantityRange = (str: string): boolean => / - /.test(str);

export const getDisplayNameFromScrapedDisplayName = (
  scrapedDisplayName: string,
): string => scrapedDisplayName.replace(quantityRegex, '');

export const getQuantityValueFromScrapedDisplayName = (
  scrapedDisplayName: string,
): number => {
  const match = scrapedDisplayName.match(quantityRegex);

  if (!match) {
    return 1;
  }

  const quantityPart = match[0].trim();
  const unit = getQuantityUnitFromScrapedDisplayName(scrapedDisplayName);

  if (isQuantityMultiple(quantityPart)) {
    const [amount, quantity] = quantityPart
      .split(` ${unit}`)
      .join('')
      .split(' x ');
    const total = parseInt(amount) * parseInt(quantity);

    return total;
  }

  if (isQuantityRange(quantityPart)) {
    const [rangeFrom, rangeTo] = quantityPart
      .split(` ${unit}`)
      .join('')
      .split(' - ');
    const average =
      (parseInt(rangeTo) - parseInt(rangeFrom)) / 2 + parseInt(rangeFrom);

    return average;
  }

  return parseInt(quantityPart.split(` ${unit}`).join(''));
};

export const getQuantityUnitFromScrapedDisplayName = (
  scrapedDisplayName: string,
): string => {
  const match = scrapedDisplayName.match(/(g|kg|ml|l|pk)$/i); // assumes unit is at the end of the line
  const unit = match ? match[0] : 'unit';

  return unit;
};

export const parseProducts = (scrapedProducts: ScrapedProduct[]): Product[] => {
  return scrapedProducts.map((scrapedProduct) => {
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
      quantityValue,
      quantityUnit,
    };
  });
};
