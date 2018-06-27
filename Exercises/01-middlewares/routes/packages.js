let express = require('express');

let router = express.Router();

/* GET package listing. */
router.get('/', (req, res) => {
  const myPackages = {
    1: 'react',
    2: 'redux',
    3: 'express',
    4: 'helmet',
    5: 'react-redux',
  };
  res.send(myPackages);
});

module.exports = router;
