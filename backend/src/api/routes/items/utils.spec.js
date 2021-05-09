const { expect } = require('chai');
const { getPriceDecimals } = require('./utils');

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
});
