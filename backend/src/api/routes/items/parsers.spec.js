const { expect } = require('chai');
const { parseSearchResultData, getCategories, parseSearchResults } = require('./parsers');
const { MELI_SEARCH_RESPONSE_SAMPLE } = require('../../../test-data/meli-responses-samples');
const { JSON_SIGN } = require('../../../services/consts');

describe('routes/parsers', () => {
  describe('search results parser', () => {
    it('should get categories properly', () => {
      const input = MELI_SEARCH_RESPONSE_SAMPLE.filters;
      const output = [
        'Electrónica, Audio y Video',
        'Audio',
        'Reproductores Portátiles',
        'iPod'
      ];

      expect(getCategories(input)).to.deep.equal(output);
    });

    it('should parse search result properly', () => {
      const input = MELI_SEARCH_RESPONSE_SAMPLE.results[0];
      const output = {
        id: 'MLA916188006',
        title: 'iPod Touch 32gb - Blue',
        condition: 'new',
        free_shipping: true,
        price: {
          currency: 'ARS',
          amount: 39999,
          decimals: '00'
        },
        picture: 'http://http2.mlstatic.com/D_961656-MLA45566819084_042021-O.jpg'
      };

      expect(parseSearchResultData(input)).to.deep.equal(output);
    });

    it('should parse everything properly', () => {
      const input = { ...MELI_SEARCH_RESPONSE_SAMPLE };
      input.results = [input.results[0]];

      const output = {
        author: JSON_SIGN,
        categories: [
          'Electrónica, Audio y Video',
          'Audio',
          'Reproductores Portátiles',
          'iPod'
        ],
        items: [
          {
            id: 'MLA916188006',
            title: 'iPod Touch 32gb - Blue',
            condition: 'new',
            free_shipping: true,
            price: {
              currency: 'ARS',
              amount: 39999,
              decimals: '00'
            },
            picture: 'http://http2.mlstatic.com/D_961656-MLA45566819084_042021-O.jpg'
          }
        ]
      };

      expect(parseSearchResults(input)).to.deep.equal(output);
    });
  });
});
