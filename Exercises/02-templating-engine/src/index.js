const express = require('express');

const app = express();
app.set('view engine', 'ejs');

const languages = ['JavaScript', 'Haskell', 'Python'];

app.get('/', (req, res) => {
  res.render('index', { languages });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
