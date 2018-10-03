const express = require('express');

const router = express.Router();
const languages = [];
let i = 0;

// All GET requests
router.get('/', (req, res) => res.render('index', { languages }));

router.get('/new', (req, res) => res.render('new'));

// ALl POST requests
router.post('/new', (req, res) => {
  i += 1;
  const response = {
    name: req.body.name,
    id: i,
  };
  languages.push(response);
  res.redirect('/');
});


router.delete('/:id', (req, res) => {
  const requestedId = Number(req.params.id);
  const deletionId = languages.findIndex(lang => lang.id === requestedId);
  languages.splice(deletionId, 1);
  res.redirect('/');
});

module.exports = router;
