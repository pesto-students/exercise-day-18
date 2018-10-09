const express = require('express');

const app = express();
const myMiddleware = (req, res, next) => {
  res.set('middleware-header', req.url);
  next();
};

app.use(myMiddleware);

app.get('/', (req, res) => {
  res.send('Hello');
});
app.get('/languages', (req, res) => {
  res.json(['C', 'C++', 'Java', 'Javascript', 'Go']);
});
app.get('/packages', (req, res) => {
  res.json(['react', 'express', 'create-react-app', 'fourth', 'fifth']);
});

app.listen(3000);
