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

const getPriceDecimals = (price) => {
  const priceAsText = price.toString();
  const splittedPriceAsText = priceAsText.split('.');

  if (splittedPriceAsText.length === 1) {
    return 0;
  }

  return parseInt(splittedPriceAsText[1], 10);
};

const parseItemData = (baseData, description) => ({
  author: {
    name: 'Nicolás',
    lastname: 'Salazar',
  },
  item: {
    id: baseData.id,
    title: baseData.title,
    price: {
      currency: baseData.currency_id,
      amount: baseData.base_price,
      decimals: getPriceDecimals(baseData.base_price),
    },
    picture: getItemPicture(baseData),
    condition: baseData.condition,
    free_shipping: getItemFreeShippingAttribute(baseData),
    sold_quantity: baseData.sold_quantity,
    description
  }
});

module.exports = {
  parseItemData,
};
