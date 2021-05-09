const axios = require('axios');
const { throwDatabaseError } = require('../utils');
const { MELI_SEARCH_ENDPOINT } = require('./consts');

const getSearchResults = async (querySearch) => {
  const targetUrl = `${MELI_SEARCH_ENDPOINT}?q=${querySearch}`;
  const serverResponse = await axios.get(targetUrl);

  const { data } = serverResponse;
  if (!data) {
    throwDatabaseError();
  }

  return data;
};

module.exports = {
  getSearchResults,
};
