const { expect } = require('chai');
const {
  getCategories,
  getItemFreeShippingAttribute,
  getItemPicture,
  parseSearchResultData,
  parseSearchResults,
  parseItemDetailData,
} = require('./parsers');
const { MELI_SEARCH_RESPONSE_SAMPLE, MELI_DETAIL_RESPONSE_SAMPLE, MELI_DESCRIPTION_RESPONSE_SAMPLE } = require('../../../test-data/meli-responses-samples');
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
        picture: 'http://http2.mlstatic.com/D_961656-MLA45566819084_042021-O.jpg',
        location: 'Capital Federal',
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
            picture: 'http://http2.mlstatic.com/D_961656-MLA45566819084_042021-O.jpg',
            location: 'Capital Federal',
          }
        ]
      };

      expect(parseSearchResults(input)).to.deep.equal(output);
    });
  });

  describe('item detail parser', () => {
    it('should get picture properly', () => {
      const input = MELI_DETAIL_RESPONSE_SAMPLE;
      const output = 'https://http2.mlstatic.com/D_727202-MLA44998592753_022021-O.jpg';

      expect(getItemPicture(input)).to.equal(output);
    });

    it('should get null for picture attribute if no pictures on data', () => {
      const input = {
        ...MELI_DETAIL_RESPONSE_SAMPLE,
        pictures: [],
      };

      const output = null;

      expect(getItemPicture(input)).to.equal(output);
    });

    it('should get free shipping attributes properly', () => {
      const input = MELI_DETAIL_RESPONSE_SAMPLE;
      const output = true;

      expect(getItemFreeShippingAttribute(input)).to.equal(output);
    });

    it('should parse everything properly', () => {
      const dataInput = MELI_DETAIL_RESPONSE_SAMPLE;
      const descriptionInput = MELI_DESCRIPTION_RESPONSE_SAMPLE;

      const output = {
        author: JSON_SIGN,
        item: {
          id: 'MLA886405497',
          title: 'Bicicleta Nordic X3 By Slp 21v R29 Aluminio Fr. Disco Suspen',
          condition: 'new',
          free_shipping: true,
          price: {
            currency: 'ARS',
            amount: 37998.1,
            decimals: '10'
          },
          picture: 'https://http2.mlstatic.com/D_727202-MLA44998592753_022021-O.jpg',
          sold_quantity: 56,
          description: descriptionInput
        },
      };

      expect(parseItemDetailData(dataInput, descriptionInput)).to.deep.equal(output);
    });
  });
});
