const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const config = {
  PORT: 8000,
};

const users = [];
const secretString = 't4hut4hrjubeslakc9dpkdasad';

app.use(bodyParser.json());

app.use((req, res, next) => {
  if (req.method === 'GET' && req.url === '/') {
    if (!Reflect.has(req.headers, 'Authorization')) {
      res.end('Not authenticated');
    } else if (req.headers.Authorization !== secretString) {
      res.end('Invalid token');
    } else {
      next();
    }
  } else {
    next();
  }
});

app.get('/', (req, res) => res.json([]));

app.post('/signup', (req, res) => {
  const u = req.body.username;
  const p = req.body.password;
  if (u && p) {
    if (users.findIndex(user => user.username === u && user.password === p) > -1) {
      users.push({ username: u, password: p });
      return res.json({ token: secretString });
    }
  }

  return res.json({ error: 'Invalid username or password' });
});

// eslint-disable-next-line no-console
app.listen(config.PORT, () => console.log(`Server listening on port ${config.PORT}`));
