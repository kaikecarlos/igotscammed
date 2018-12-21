var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Auth routes
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;