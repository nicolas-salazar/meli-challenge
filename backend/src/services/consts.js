const MELI_SERVICES_HOST = 'https://api.mercadolibre.com';
const ID_REPLACER = ':id';

const MELI_ITEM_DATA_ENDPOINT = `${MELI_SERVICES_HOST}/items/${ID_REPLACER}`;
const MELI_ITEM_DESCRIPTION_ENDPOINT = `${MELI_SERVICES_HOST}/items/${ID_REPLACER}/description`;

const NOT_FOUND_ERROR_BASE = {
  data: {
    error: 'not_found',
    message: 'Item descriptions of item id 1 not found',
  },
  status: 404,
};

module.exports = {
  ID_REPLACER,
  MELI_ITEM_DATA_ENDPOINT,
  MELI_ITEM_DESCRIPTION_ENDPOINT,
  NOT_FOUND_ERROR_BASE
};
