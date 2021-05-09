const express = require('express');
const { getItemDescriptionFromMeliServers, getItemDataFromMeliServers } = require('../../../services');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json({
    msg: 'hey guys from /'
  });
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
      res.status(200).json({
        itemData,
        itemDescription
      });
    })
    .catch((error) => {
      res.status(error.response.status).json({
        error: error.response.data.error,
        message: error.response.data.message,
      });
    });
});

module.exports = router;
