const express = require('express');

const app = express();

app.use((req, res, next) => {
  const reqUrl = req.url.slice(1) || '';
  console.log(`middleware-header: ${reqUrl} - ${Date()}`);
  res.set({ 'middleware-header': reqUrl });
  next();
});

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello');
});

const languages = [
  { name: 'Javascript' },
  { name: 'Haskell' },
  { name: 'C++' },
];

const npmPackages = [
  { name: 'Nodemon' },
  { name: 'Express' },
  { name: 'puppeteer' },
];


app.get('/languages', (req, res) => {
  res.json(languages);
});
app.get('/packages', (req, res) => {
  res.json(npmPackages);
});


app.listen(PORT, () => {
  console.log(`Serve is listening on port: ${PORT}`);
});

