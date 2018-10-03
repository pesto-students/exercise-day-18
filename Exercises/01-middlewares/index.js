const express = require('express');

const app = express();
const config = {
  PORT: 3000,
};

app.get('/', (req, res) => res.end('Hello!'));

app.use((req, res, next) => {
  const route = req.url.substr(1);
  res.setHeader('middleware-key', route);

  // eslint-disable-next-line no-console
  console.log(`Request received on route ${route} at ${new Date()}`);

  next();
});

app.get('/languages', (req, res) => {
  const languages = ['C', 'C++', 'Javascript', 'Racket', 'Java'];
  res.json(languages);
});

app.get('/packages', (req, res) => {
  const packages = ['express', 'react', 'react-router', 'body-parser', 'prop-types'];
  res.json(packages);
});

// eslint-disable-next-line no-console
app.listen(config.PORT, () => console.log(`Server listening on port ${config.PORT}`));
