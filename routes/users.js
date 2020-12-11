var express = require('express');
var router = express.Router();
var db = require('../configs/koneksi');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/me', function(req, res, next) {
  res.send('All about me');
});

router.post('/me', function(req, res) {

  let form = {
    emailKu: req.body.email,
    paswordKu: req.body.pass,
  };

  let sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
  db.query(sql, [form.emailKu, form.paswordKu], (err, rows) => {
    if(err) res.json({ message: 'Ada kesalahan', result: err })

    if(rows.length === 1) {
      res.json({ message: 'User ditemukan', result: rows });
    } else {
      res.json({ message: 'User ganda', result: rows });
    }

  })

});

module.exports = router;
