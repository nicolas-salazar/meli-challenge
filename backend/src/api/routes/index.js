const express = require('express');
const itemsRouter = require('./items');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hey there! Greetings from Colombia 🇨🇴. Try one of the following...',
    endpoints: [
      {
        method: 'GET',
        url: '/items/items?q=:<your search goes here>',
      },
      {
        method: 'GET',
        url: '/items/items/:id',
      },
    ],
    by: 'Nicolás Salazar',
    github: 'https://github.com/nicolas-salazar/meli-challenge',
  });
});

// Nested routes:
router.use('/items', itemsRouter);

module.exports = router;
