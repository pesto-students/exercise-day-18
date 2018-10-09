const express = require('express');
const Cryptr = require('cryptr');

const cryptr = new Cryptr('mySuperSecretKey');

const app = express();

const favMovies = ['FirstMovie', 'SecondMovie', 'ThirdMovie'];
const token = [''];

function encryptSecretly(u, p) {
  return cryptr.encrypt(`${u}:${p}`);
}
function validate(authToken) {
  return authToken === cryptr.decrypt(token[0]);
}
app.get('/signup', (req, res) => {
  token.push(encryptSecretly(req.query.username, req.query.password));
  res.send(token[0]);
});

app.use((req, res, next) => { // eslint-disable-line
  if (!req.headers.authorization) {
    return res.status(403).json({ error: 'No credentials sent!' });
  }
  if (validate(req.headers.authorization)) {
    next();
  }
  res.send('Invalid Token');
});

app.get('/', (req, res) => {
  res.json(favMovies);
});

app.listen(3000);
