const express = require('express');

const router = express.Router();

const languages = [];
router.get('/', (req, res) => {
  res.render('index.ejs', {
    languages,
  });
});

router.post('/', (req, res) => {
  const { name } = req.body;
  languages.push({ id: languages.length, name });
  res.render('index.ejs', {
    languages,
  });
});

router.get('/new', (req, res) => {
  res.render('new.ejs');
});

router.get('/:id/edit', (req, res) => {
  const { id } = req.params;
  const language = languages[id];
  res.render('show.ejs', {
    language,
  });
});

module.exports = router;
