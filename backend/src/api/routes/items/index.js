const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json({
    msg: 'hey guys from /'
  });
});

router.get('/:id', async (req, res) => {
  res.status(200).json({
    msg: 'hey guys from /:id'
  });
});

module.exports = router;