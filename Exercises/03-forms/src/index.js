const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// setting ejs at view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  return res.redirect('/form-with-get');
});

app.get('/form-with-get', (req, res) => {
  return res.render('../../views/form-with-get');
});

app.get('/form-with-post', (req, res) => {
  return res.render('../../views/form-with-post');
});

app.get('/submit-form-with-get', (req, res) => {
  res.send({ first: req.query.first, last: req.query.last });
});

app.post('/submit-form-with-post', (req, res) => {
  res.send({ firstName: req.body.first, lastName: req.body.last });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
