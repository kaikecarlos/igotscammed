var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');

/* GET  listing. */
router.get('/:id', async function(req, res, next) {
  var User = require('../models/index').User
  var Report = require('../models/index').Report
  
  var report = await Report.findByPk(req.params.id)
  if (!report) res.sendStatus(404)
  var user = await User.findByPk(report.user_id)
  res.render('reports/view', {report: report, user: user})
})
module.exports = router;
