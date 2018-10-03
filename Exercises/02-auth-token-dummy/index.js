const bodyParser = require('body-parser');
const crypto = require('crypto');
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
    if (!Reflect.has(req.headers, 'authorization')) {
      res.end('Not authenticated');
    } else {
      const decipher = crypto.createDecipher('aes192', secretString);
      let decrypted = '';
      decipher.on('readable', () => {
        const data = decipher.read();
        if (data) decrypted += data.toString('utf-8');
      });
      decipher.on('end', () => {
        try {
          const userData = JSON.parse(decrypted);
          if (users.findIndex(user =>
            userData.username === user.username &&
            userData.password === user.password)
            > -1) {
            next();
          } else {
            res.end('Invalid token');
          }
        } catch (e) {
          res.end('Invalid token');
        }
      });
      decipher.on('error', () => {
        res.end('Invalid token');
      });

      decipher.write(req.headers.authorization, 'hex');
      decipher.end();
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
    if (users.findIndex(user => user.username === u && user.password === p) === -1) {
      const newUser = { username: u, password: p };
      users.push(newUser);

      let token = '';
      const cipher = crypto.createCipher('aes192', secretString);
      cipher.on('readable', () => {
        const data = cipher.read();
        if (data) token += data.toString('hex');
      });
      cipher.on('end', () => {
        res.json({ token });
      });

      cipher.write(JSON.stringify(newUser));
      return cipher.end();
    }
  }

  return res.json({ error: 'Invalid username or password' });
});

// eslint-disable-next-line no-console
app.listen(config.PORT, () => console.log(`Server listening on port ${config.PORT}`));
