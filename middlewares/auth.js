const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const checkAuth = (req, res, next) => {
    var token = req.cookies['token']
    if (!token) res.redirect('/login')
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