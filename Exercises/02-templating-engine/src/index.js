const express = require('express');   // eslint-disable-line

const app = express();
// app.use('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
const languages = ['JavaScript', 'Haskell', 'Python'];

app.get('/', (req, res) => {
  return res.render('index', { languages }); // Use res.render() to render the ejs file instead of sending text response
});

app.listen(3000);
