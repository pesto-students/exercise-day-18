const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

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
  res.end(JSON.stringify({
    firstName: req.query.first,
    lastName: req.query.last,
  }));
});

app.post('/submit-form-with-post', (req, res) => {
  res.end(JSON.stringify({
    firstName: req.body.first,
    lastName: req.body.last,
  }));
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
