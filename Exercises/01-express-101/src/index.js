const express = require('express');

const app = express();

// 1) Create Routes
app.get('/', (_, res) => {
  res.send('Hey, I am server response');
});

app.get('/movie/:title', (req, res) => {
  // console.log(req.params);
  res.send(`My favourite movie is ${req.params.title}`);
});

// 2) Start server on port 3000
app.listen(3000, () => {
  console.log('Running in the console');
});

module.exports = app;
