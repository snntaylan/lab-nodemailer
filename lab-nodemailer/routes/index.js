const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


  // res.render ('auth/signup', {username, password, email})

module.exports = router;
