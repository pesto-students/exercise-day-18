const express = require('express'); // eslint-disable-line

const app = express();

// 1) Create Routes
app.get('/', (req, res) => res.send('Hey, I am server response'));
app.get('/movie/:id', (req, res) => res.send(`My favorite movie is ${req.params.id}`));
// 2) Start server on port 3000
app.listen(3000);
module.exports = app;
