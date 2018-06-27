const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello i am server ');
});

app.get('/movie/:title', (req, res) => {
  res.send(`My Fav movie is ${req.params.title}`);
});
app.listen(PORT, () => {
  console.log(`Example: ${PORT}`);
});
// 1) Create Routes

// 2) Start server on port 3000

module.exports = app;
