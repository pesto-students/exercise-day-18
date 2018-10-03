const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./router');
const Users = require('./userData');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/signup', (req, res) => {
  res.render('index');
});

app.post('/signup', (req, res) => {
  const accessToken = Users.add(req.body.username, req.body.password);
  res.send({token: accessToken});
});

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
