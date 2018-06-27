const express = require('express');

const app = express();

// 1) Create Routes
app.get('/', (_, res) => {
  res.send('Hey, I am server response');
});

app.get('/movie/:title', (req, res) => {
  res.send(`My favorite movie is ${req.params.title}`);
});

app.listen(3000, () => {
  console.log('Server listening on port: 3000');
});
// 2) Start server on port 3000

module.exports = app;
