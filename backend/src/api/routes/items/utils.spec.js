const { expect } = require('chai');
const { getPriceDecimals, isQuerySearchValid } = require('./utils');

describe('routes/items utils', () => {
  describe('price decimal part getter', () => {
    it('should get `00` decimal from pure integer price', () => {
      const input = 1530;
      const output = '00';

      expect(getPriceDecimals(input)).to.equal(output);
    });

    it('should get correct decimal part from double digit decimal price', () => {
      const input = 1530.25;
      const output = '25';

      expect(getPriceDecimals(input)).to.equal(output);
    });

    it('should get postfixed-zero decimal part from single digit decimal price', () => {
      const input = 1530.2;
      const output = '20';

      expect(getPriceDecimals(input)).to.equal(output);
    });

    it('should keep zero prefix at decimal part from double digit decimal price with 0x format', () => {
      const input = 1530.02;
      const output = '02';

      expect(getPriceDecimals(input)).to.equal(output);
    });
  });

  describe('items query params search validator', () => {
    it('should approve validation for search with format `<search>`', () => {
      const input = 'xbox';
      const output = true;

      expect(isQuerySearchValid(input)).to.equal(output);
    });

    it('should approve validation for search with one colon at the beggining', () => {
      const input = ':xbox';
      const output = true;

      expect(isQuerySearchValid(input)).to.equal(output);
    });

    it('should deny validation for search with only one character', () => {
      const input = 'a';
      const output = false;

      expect(isQuerySearchValid(input)).to.equal(output);
    });

    it('should deny validation for search with no characters', () => {
      const input = '';
      const output = false;

      expect(isQuerySearchValid(input)).to.equal(output);
    });

    it('should deny validation for search with sql injection', () => {
      const input = 'xbox SELECT * FROM';
      const output = false;

      expect(isQuerySearchValid(input)).to.equal(output);
    });
  });
});
