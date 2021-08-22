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
      ).toEqual('pk');
    });
  });
});
