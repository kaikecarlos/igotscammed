var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/:username', (req, res, next) => {
  var userService = require('../services/user');
  userService.getUserByName(req.params.username)
  .then(exists => {
    if(!exists) res.send(404);
    res.send({exists})
  })
})
// Auth routes
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;