const axios = require('axios');
const {
  ID_REPLACER, MELI_ITEM_DATA_ENDPOINT, MELI_ITEM_DESCRIPTION_ENDPOINT, NOT_FOUND_ERROR_BASE
} = require('./consts');

const throwNoDataError = () => {
  // eslint-disable-next-line no-new-object
  throw new Object({
    response: NOT_FOUND_ERROR_BASE
  });
};

const getItemDataFromMeliServers = async (id) => {
  const targetUrl = MELI_ITEM_DATA_ENDPOINT.replace(ID_REPLACER, id);
  const serverResponse = await axios.get(targetUrl);

  const { data } = serverResponse;
  if (!data) {
    throwNoDataError();
  }

  return data;
};

const getItemDescriptionFromMeliServers = async (id) => {
  const targetUrl = MELI_ITEM_DESCRIPTION_ENDPOINT.replace(ID_REPLACER, id);
  const serverResponse = await axios.get(targetUrl);
  const { data } = serverResponse;
  return (data && data.plain_text) || null;
};

module.exports = {
  getItemDataFromMeliServers,
  getItemDescriptionFromMeliServers
};
