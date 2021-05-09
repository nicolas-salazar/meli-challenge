const { JSON_SIGN } = require('../../../services/consts');
const { CATEGORY_FILTER_ID } = require('../../../services/search/consts');
const { getPriceDecimals } = require('./utils');

const getItemPicture = (baseData) => {
  if (baseData && baseData.pictures && baseData.pictures[0] && baseData.pictures[0].secure_url) {
    return baseData.pictures[0].secure_url;
  }

  return null;
};

const getItemFreeShippingAttribute = (baseData) => {
  if (baseData && baseData.shipping && baseData.shipping.free_shipping !== undefined) {
    return baseData.shipping.free_shipping;
  }

  return null;
};

const getCategories = (responseFilters) => {
  if (!responseFilters) {
    return [];
  }

  const categoriesFilter = responseFilters.find((item) => item.id === CATEGORY_FILTER_ID);
  if (!categoriesFilter || !categoriesFilter.values) {
    return [];
  }

  const primaryTree = categoriesFilter.values[0];
  if (!primaryTree) {
    return [categoriesFilter.name];
  }

  const categories = primaryTree.path_from_root.map((category) => category.name);
  return [...new Set(categories)];
};

const getBaseDataItemParsed = (baseData) => ({
  id: baseData.id,
  title: baseData.title,
  condition: baseData.condition,
  free_shipping: getItemFreeShippingAttribute(baseData),
});

const parseItemDetailData = (baseData, description) => ({
  author: JSON_SIGN,
  item: {
    ...getBaseDataItemParsed(baseData),
    price: {
      currency: baseData.currency_id,
      amount: baseData.base_price,
      decimals: getPriceDecimals(baseData.base_price),
    },
    picture: getItemPicture(baseData),
    sold_quantity: baseData.sold_quantity,
    description
  }
});

const parseSearchResultData = (baseData) => ({
  ...getBaseDataItemParsed(baseData),
  price: {
    currency: baseData.currency_id,
    amount: baseData.price,
    decimals: getPriceDecimals(baseData.price),
  },
  picture: baseData.thumbnail,
});

const getParsedResults = (results) => {
  if (!results || !results.length) {
    return [];
  }

  return results.map((item) => parseSearchResultData(item));
};

const parseSearchResults = (meliSearchResponse) => ({
  author: JSON_SIGN,
  categories: getCategories(meliSearchResponse.filters),
  items: getParsedResults(meliSearchResponse.results),
});

module.exports = {
  parseItemDetailData,
  parseSearchResults,
  parseSearchResultData,

  getItemPicture,
  getItemFreeShippingAttribute,
  getCategories,
  getBaseDataItemParsed,
  getParsedResults,
};
