const express = require('express');

const app = express();
const config = {
  PORT: process.env.PORT || 3000,
};

// 1) Create Routes
app.get('/', (req, res) => {
  res.end('Hey, I am server response');
});

app.get('/movie/:title', (req, res) => {
  res.end(`My favorite movie is ${req.params.title}`);
});

// 2) Start server on port 3000
app.listen(config.PORT, () => {
  // eslint-disable-next-line
  console.log(`Server listening on port: ${config.PORT}`);
});

module.exports = app;
