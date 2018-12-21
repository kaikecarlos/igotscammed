const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const Users = require('../models').User;

const authenticate = params => {
    return Users.findOne({
        where: {
            email: params.email
        },
        raw: true
    }).then(user => {
        if (!user && !bcrypt.compareSync(params.password || '', user.password)) throw new Error('Email or Password wrong!');
        const payload = {
            email: user.email,
            id: user.id,
            username: user.username,
            time: new Date()
        };

        var token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRE_TIME
        });

        return token;
    });
}
module.exports = {
    authenticate
}