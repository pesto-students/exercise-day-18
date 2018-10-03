const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  return res.redirect('/form-with-get');
});

app.get('/form-with-get', (req, res) => {
  return res.render('form-with-get');
});

app.get('/form-with-post', (req, res) => {
  return res.render('form-with-post');
});

app.get('/submit-form-with-get', (req, res) => {
  const response = {
    first: req.query.first,
    last: req.query.last,
  };
  res.send(JSON.stringify(response));
});

app.post('/submit-form-with-post', (req, res) => {
  const response = {
    first: req.body.first,
    last: req.body.last,
  };
  res.send(JSON.stringify(response));
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
