const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const urlParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

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
  // console.log(req);
  res.send(`${req.query.first} ${req.query.last}`);
});


app.post('/submit-form-with-post', urlParser, (req, res) => {
  // console.log(req.body);
  res.send(`${req.body.first} ${req.body.last}`);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
