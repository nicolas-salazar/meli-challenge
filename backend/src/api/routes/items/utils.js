const getPriceDecimals = (price) => {
  const priceAsText = price.toString();
  const splittedPriceAsText = priceAsText.split('.');

  if (splittedPriceAsText.length === 1) {
    return '00';
  }

  if (splittedPriceAsText.length === 2) {
    const decimalPart = splittedPriceAsText[1];
    if (decimalPart.length === 2) {
      return decimalPart;
    }

    if (decimalPart[0] === '0') {
      return decimalPart;
    }

    return `${decimalPart}0`;
  }

  return '00';
};

const isQuerySearchValid = (querySearch) => {
  try {
    if (querySearch.toUpperCase().includes('INSERT')) return false;
    if (querySearch.toUpperCase().includes('SELECT')) return false;
    if (querySearch.toUpperCase().includes('UPDATE')) return false;
    if (querySearch.toUpperCase().includes('DELETE')) return false;

    return !!querySearch[1];
  } catch (error) {
    return false;
  }
};

module.exports = {
  getPriceDecimals,
  isQuerySearchValid,
};
