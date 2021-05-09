const express = require('express');
const { getItemDescriptionFromMeliServers, getItemDataFromMeliServers } = require('../../../services/items');
const { getSearchResults } = require('../../../services/search');
const { parseItemDetailData, parseSearchResults } = require('./parsers');
const { isQuerySearchValid } = require('./utils');

const router = express.Router();

router.get('/', async (req, res) => {
  const querySearch = req.query.q;

  if (!isQuerySearchValid(querySearch)) {
    res.status(412).json({
      error: 'invalid_search',
      message: 'The provided search is not valid. Should use format :<search text>'
    });

    return;
  }

  try {
    const searchResults = await getSearchResults(querySearch);
    res.status(200).json(parseSearchResults(searchResults));
  } catch (error) {
    res.status(error.response.status).json({
      error: error.response.data.error,
      message: error.response.data.message,
    });
  }
});

router.get('/:id', async (req, res) => {
  const targetId = req.params.id;

  if (!targetId) {
    res.status(400).json({
      error: 'No item id provided',
    });

    return;
  }

  const dataFetchingPromises = [];
  dataFetchingPromises.push(getItemDataFromMeliServers(targetId));
  dataFetchingPromises.push(getItemDescriptionFromMeliServers(targetId));

  Promise.all(dataFetchingPromises)
    .then(([itemData, itemDescription]) => {
      res.status(200).json(parseItemDetailData(itemData, itemDescription));
    })
    .catch((error) => {
      res.status(error.response.status).json({
        error: error.response.data.error,
        message: error.response.data.message,
      });
    });
});

module.exports = router;
