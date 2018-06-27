const express = require('express');

const app = express();

// 1) Create Routes
app.get('/', (req, res) => {
  res.send('Hey, I am server response');
});

app.listen(3000, () => console.log('Server listening on port: 3000s'));

// 2) Start server on port 3000

module.exports = app;
