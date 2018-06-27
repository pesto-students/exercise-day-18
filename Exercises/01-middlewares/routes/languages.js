let express = require('express');

let router = express.Router();

/* GET Language listing. */
router.get('/', (req, res) => {
  const myLanguages = {
    1: 'javascript',
    2: 'java',
    3: 'python',
    4: 'c++',
    5: 'haskell',
  };
  res.send(myLanguages);
});

module.exports = router;
