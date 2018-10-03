const express = require('express');

const router = express.Router();

const languages = [];

router.get('/', (req, res) => {
  res.render('index', { languages });
});

router.post('/', (req, res) => {
  languages.push({
    id: languages.length,
    name: req.body.name,
  });
  res.redirect('/');
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.delete('/:id', (req, res) => {
  const idx = languages.findIndex(l => l.id === Number(req.params.id));

  if (idx > -1) {
    languages.splice(idx, 1);
  }

  res.redirect('/');
});

router.patch('/:id', (req, res) => {
  const idx = languages.findIndex(l => l.id === Number(req.params.id));

  if (idx > -1 && Reflect.has(req.body, 'name')) {
    languages[idx].name = req.body.name;
  }

  res.redirect('/');
});

router.get('/:id/edit', (req, res) => {
  const langIdx = languages.findIndex(lang => lang.id === Number(req.params.id));
  if (langIdx === -1) res.redirect('/');
  else res.render('edit', { language: languages[langIdx] });
});

module.exports = router;
