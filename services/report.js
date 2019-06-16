const sequelize = require("../db");
const Reports = require('../models/index').Report;

const findReportById = id => Reports.findOne({where: {id}})
const findAll = async reports => Reports.findAll()

module.exports = {
    findReportById,
    findAll
}