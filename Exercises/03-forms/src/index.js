const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => {
  return res.redirect('/form-with-get');
});

app.get('/form-with-get', (req, res) => {
  return res.render('../views/form-with-get');
});

app.get('/submit-form-with-get', (req, res) => {
  const { first, last } = req.query;

  return res.render('../views/submit-form-with-get', {
    first,
    last,
  });
});

app.get('/form-with-post', (req, res) => {
  return res.render('../views/form-with-post');
});

app.post('/submit-form-with-post', (req, res) => {
  return res.render('../views/submit-form-with-post', req.body);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
