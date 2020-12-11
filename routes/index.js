var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// http://localhost:3000/auth
router.get('/auth', function(req, res, next) {
  res.render('index', { title: 'Auth' });
});

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

module.exports = router;
