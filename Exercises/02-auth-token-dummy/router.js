const express = require('express');
const router = express.Router();

const Users = require('./userData');

router.use((req, res, next) => {
  if (!req.headers['auth-token']) {
    res.send(401, 'Not authenticated');
  } else {
    next();
  }
});

router.route('/')
   .get((req, res) => {
     const user = Users.find(req.headers['auth-token']);
     if(user) {
       res.send(['Catch me if you can', 'Lord of the rings']);
     } else {
      res.send('Invalid token');
     }
   });

  module.exports = router;