const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser());

app.set('view engine', 'ejs');

/* HANDLE POST REQUESTS */


/* HANDLE GET REQUESTS */
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
  const responseData = {
    firstName: req.param('first'),
    lastName: req.param('last'),
  };
  res.send(JSON.stringify(responseData));
});

app.post('/submit-form-with-post', (req, res) => {
  const responseData = {
    firstName: req.body.first,
    lastName: req.body.last,
  };
  res.send(JSON.stringify(responseData));
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
