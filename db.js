const Sequelize = require('sequelize');
const dotenv = require("dotenv").config();
var sequelize = new Sequelize(process.env.DATABASE_URL);
require('sequelize-values')(sequelize);

module.exports = sequelize;