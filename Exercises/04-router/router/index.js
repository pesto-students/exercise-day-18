const express = require('express');

const router = express.Router();


let languages = [{
  id: 1,
  name: 'JavaScript',
}, {
  id: 2,
  name: 'Haskell',
}, {
  id: 3,
  name: 'Python',
}];


router.get('/', (req, res) => {
  res.render('index', {
    languages,
  });
});
router.get('/new', (req, res) => {
  res.render('new');
});

router.get('/:id/edit', (req, res) => {
  const matchedLanguage = languages.filter((language) => {
    // console.log(req.params.id);
    // console.log(language.id.toString());

    return language.id.toString() === req.params.id;
  });
  res.render('edit', {
    language: matchedLanguage[0],
  });
});

router.post('/', (req, res) => {
  const newLanguage = {
    id: (languages.length) + 1,
    name: req.body.name,
  };
  console.log(newLanguage);
  languages.push(newLanguage);
  res.redirect('/');
});

router.patch('/:id', (req, res) => {
  const newLanguagesList = languages.reduce((acc, language) => {
    // return language.id.toString() === req.params.id;
    if (language.id.toString() === req.params.id) {
      return [...acc, {
        id: req.params.id,
        name: req.body.name,
      }];
    }
    return [...acc, language];
  }, []);

  languages = newLanguagesList;

  res.redirect('/');
});

router.delete('/:id', (req, res) => {
  const newLanguagesList = languages.reduce((acc, language) => {
    // return language.id.toString() === req.params.id;
    if (language.id.toString() === req.params.id) {
      return [...acc];
    }
    return [...acc, language];
  }, []);

  languages = newLanguagesList;

  res.redirect('/');
});

module.exports = router;
