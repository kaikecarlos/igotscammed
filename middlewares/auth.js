const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const checkAuth = (req, res, next) => {
    var token = req.headers['token']
    if (!token) res.status(403).send({ auth: false, message: 'No token provided' });
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to auth.' });
        req.user = {
            id: decoded.id,
            username: decoded.username
        };
        next();
    })
}

module.exports = {
    checkAuth
}