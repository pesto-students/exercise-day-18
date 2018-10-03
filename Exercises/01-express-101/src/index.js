const express = require('express');

const app = express();

// 1) Create Routes

app.route('/')
  .get((req, res) => {
    res.send('Hey, I am server response');
  });

app.route('/movie/:title')
  .get((req, res) => {
    res.send(`My favorite movie is ${req.params.title}`);
  });

// 2) Start server on port 3000

app.listen(3000, () => {
  console.log('Server listening on port: 3000');
});

module.exports = app;
