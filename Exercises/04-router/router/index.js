const express = require('express');

const router = express.Router();
const language = [];

router.get('/', (req, res) => {
  res.render('../views/index', () => {
    res.send(language);
  });
});

module.exports = router;
