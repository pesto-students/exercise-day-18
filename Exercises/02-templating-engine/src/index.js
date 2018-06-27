const express = require('express');

const app = express();
app.set('view engine', 'ejs');

const languages = ['JavaScript', 'Haskell', 'Python'];

app.get('/', (_, res) => {
  res.render('../views/index', () => {
    res.send(languages);
  });
  // Use res.render() to render the ejs file instead of sending text response
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
