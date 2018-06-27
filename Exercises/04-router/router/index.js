const express = require('express');

const router = express.Router();

const languages = [];
router.get('/', (req, res) => {
  res.render('../views/index.ejs', {
    languages,
  });
});

router.post('/', (req, res) => {
  const { name } = req.body;
  languages.push({ id: languages.length, name });
  res.render('../views/index.ejs', {
    languages,
  });
});

router.get('/new', (req, res) => {
  res.render('../views/new.ejs');
});

router.get('/:id/edit', (req, res) => {
  const { id } = req.params;
  const language = languages[id];
  res.render('../views/show.ejs', {
    language,
  });
});

module.exports = router;
