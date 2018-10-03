const express = require('express');

const router = express.Router();

let languages = [{
  id: 1,
  name: 'JavaScript'
}, {
  id: 2,
  name: 'Haskell'
}, {
  id: 3,
  name: 'Python'
}];

router.route('/')
  .get((req, res) => {
    res.render('index', {
      languages
    });
  })

  .post((req, res) => {
    const newLanguage = {
      id: languages.length + 1,
      name: req.body.name
    }
    languages.push(newLanguage);

    res.render('index', {
      languages
    });
  });

router.route('/new')
  .get((req, res) => {
    res.render('new');
  });

router.route('/:id/edit')
  .get((req, res) => {
    const language = languages.find((lang) => lang.id === Number(req.params.id));
    res.render('edit', {
      language
    });
  });

router.route('/:id')
  .patch((req, res) => {
    languages = languages.map((lang) => {
      if (lang.id === Number(req.params.id)) {
        return {
          id: lang.id,
          name: req.body.name,
        }
      }
      return lang;
    });
    res.redirect('/');
  })

  .delete((req, res) => {
    languages = languages.filter(lang => lang.id !== Number(req.params.id));
    res.redirect('/');
  });

module.exports = router;
