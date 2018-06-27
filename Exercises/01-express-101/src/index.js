const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World'));
app.listen(
  3000,
  () => console.log('Example'),
);
// 1) Create Routes

// 2) Start server on port 3000

module.exports = app;
