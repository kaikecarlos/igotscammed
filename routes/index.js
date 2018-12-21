var express = require('express');
var router = express.Router();
const authMiddleware = require('../middlewares/auth');
/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('index', {user: req.user});
});
router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});
router.get('/register', authMiddleware.checkAuth, (req, res, next) => {
  if (!req.user) {
    res.render('user/register')
  } else {
    res.redirect('/')
  }
});
router.get('/login', (req, res) => {
    res.render('user/login', {user: req.user})
});

module.exports = router;
