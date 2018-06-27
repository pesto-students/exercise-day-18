const express = require('express');

const app = express();

// 1) Create Routes

app.get('/', (req, res) => {
  res.send('Hey, I am server response');
});

app.get('/movie/:title', (req, res) => {
  const { title } = req.params;
  res.send(`My favorite movie is ${title}`);
})

// 2) Start server on port 3000

app.listen(3000, () => {
  console.log("Server started on port: 3000");
});

module.exports = app;
