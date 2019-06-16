var express = require('express');
var router = express.Router();
const authMiddleware = require('../middlewares/auth');
const reportController = require('../controllers/reports');

/* GET home page. */

router.get('/', async function(req, res, next) {
  const Reports = require('../models/index').Report;
  var results = await Reports.findAll({raw: true})  
  res.render('index', { reports: results })
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});
router.get('/register', (req, res, next) => {
    res.render('user/register');
});
router.get('/login', (req, res) => {
    res.render('user/login', {user: req.user})
});

module.exports = router;
