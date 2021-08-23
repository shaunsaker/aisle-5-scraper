import {
  getDisplayNameFromScrapedDisplayName,
  getQuantityUnitFromScrapedDisplayName,
  getQuantityValueFromScrapedDisplayName,
} from './parseProducts';

describe('parseProducts', () => {
  describe('getDisplayNameFromScrapedDisplayName', () => {
    it('returns the correct display name for Large Bananas 950 g', () => {
      expect(
        getDisplayNameFromScrapedDisplayName('Large Bananas 950 g'),
      ).toEqual('Large Bananas');
    });

    it('returns the correct display name for Appletiser 100 % Sparkling Apple Juice 6 x 275 ml', () => {
      expect(
        getDisplayNameFromScrapedDisplayName(
          'Appletiser 100 % Sparkling Apple Juice 6 x 275 ml',
        ),
      ).toEqual('Appletiser 100 % Sparkling Apple Juice');
    });
  });

  describe('getQuantityValueFromScrapedDisplayName', () => {
    it('returns the correct value for Large Bananas 950 g', () => {
      expect(
        getQuantityValueFromScrapedDisplayName('Large Bananas 950 g'),
      ).toEqual(950);
    });

    it('returns the correct value for Iceberg Lettuce Head', () => {
      expect(
        getQuantityValueFromScrapedDisplayName('Iceberg Lettuce Head'),
      ).toEqual(1);
    });

    it('returns the correct value for English Cucumber 300 g - 650 g', () => {
      expect(
        getQuantityValueFromScrapedDisplayName(
          'English Cucumber 300 g - 650 g',
        ),
      ).toEqual(475);
    });

    it('returns the correct value for Still Natural Spring Water 4 x 5 L', () => {
      expect(
        getQuantityValueFromScrapedDisplayName(
          'Still Natural Spring Water 4 x 5 L',
        ),
      ).toEqual(20);
    });

    it('returns the correct value for 100% Fruit Cocktail Juice Blend 3 L', () => {
      expect(
        getQuantityValueFromScrapedDisplayName(
          '100% Fruit Cocktail Juice Blend 3 L',
        ),
      ).toEqual(3);
    });

    it('returns the correct value for Appletiser 100 % Sparkling Apple Juice 6 x 275 ml', () => {
      expect(
        getQuantityValueFromScrapedDisplayName(
          'Appletiser 100 % Sparkling Apple Juice 6 x 275 ml',
        ),
      ).toEqual(1650);
    });
  });

  describe('getQuantityUnitFromScrapedDisplayName', () => {
    it('returns the correct value for Large Bananas 950 g', () => {
      expect(
        getQuantityUnitFromScrapedDisplayName('Large Bananas 950 g'),
      ).toEqual('g');
    });

    it('returns the correct value for Iceberg Lettuce Head', () => {
      expect(
        getQuantityUnitFromScrapedDisplayName('Iceberg Lettuce Head'),
      ).toEqual('unit');
    });

    it('returns the correct value for Still Natural Spring Water 4 x 5 L', () => {
      expect(
        getQuantityUnitFromScrapedDisplayName(
          'Still Natural Spring Water 4 x 5 L',
        ),
      ).toEqual('L');
    });

    it('returns the correct value for 100% Fruit Cocktail Juice Blend 3 L', () => {
      expect(
        getQuantityUnitFromScrapedDisplayName(
          '100% Fruit Cocktail Juice Blend 3 L',
        ),
      ).toEqual('L');
    });
  });
});
