const express = require('express');

const app = express();

const topSecret = 'secret';
const favMovies = ['FirstMovie', 'SecondMovie', 'ThirdMovie'];

function encryptSecretly(u, p) {
  return u + ':' + ':' + p + ':' + topSecret; // eslint-disable-line
}
function validate(authToken) {
  return authToken === topSecret;
}

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
app.get('/signup', (req, res) => {
  const token = encryptSecretly(req.query.username, req.query.password);
  res.send(token);
});

app.listen(3000);
