const express = require('express');

const router = express.Router();
const languages = [];

router.get('/', (req, res) => {
  res.render('index', { languages });
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/new', (req, res) => {
  languages.push(req.body.name);
  res.redirect('index');
});
module.exports = router;
