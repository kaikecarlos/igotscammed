const reportS = require('../services/report');

function searchAll(req, res) {
    return reportS.findAll().catch(res.send(404))
}

module.exports = {
    searchAll
}