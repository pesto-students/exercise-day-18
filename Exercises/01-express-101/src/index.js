const express = require('express');

const app = express();

// 1) Create Routes

app.get('/', (req, res) => {
  res.send('Serving the "/" page');
});

// 2) Start server on port 3000

app.listen(3000, () => {
  console.log("Server started on port: 3000");
});

module.exports = app;
