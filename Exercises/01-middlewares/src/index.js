const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  res.setHeader('middleware-header', req.url.slice(1));
  next();
});

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/languages', (req, res) => {
  res.json([
    'JavaScript',
    'Python',
    'PHP',
    'C++',
    'C',
  ])
});

app.get('/packages', (req, res) => {
  res.json(
    [
      'express',
      'ejs',
      'body-parser',
      'react',
      'redux',
    ]
  );
});


app.listen(3000, () => {
  console.log('Listening on PORT:3000');
});



