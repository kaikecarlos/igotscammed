const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    email: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    roles: Sequelize.ARRAY(Sequelize.STRING)
});

const Report = sequelize.define('report', {
    title: Sequelize.STRING,
    reported_user: Sequelize.STRING,
    platform: Sequelize.STRING,
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    description: Sequelize.STRING
})

User.hasMany(Report, {foreignKey: 'user_id'});

module.exports = {
    User,
    Report
}