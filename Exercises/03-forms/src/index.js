const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  return res.redirect('/form-with-get');
});

app.get('/form-with-get', (req, res) => {
  return res.render('form-with-get');
});

app.get('/submit-form-with-get', (req, res) => {
  return res.render('submit-form-with-get', {
    response: JSON.stringify({
      first: req.query.first,
      last: req.query.last,
    }),
  });
});

app.get('/form-with-post', (req, res) => {
  return res.render('form-with-post');
});

app.get('/submit-form-with-post', (req, res) => {
  return res.render('submit-form-with-post');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
