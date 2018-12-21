const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authService = require('../services/auth');
const userService = require('../services/user');

function login(req, res) {
    return authService.authenticate(req.body)
        .then(token => {
            res.redirect('/');
        })
        .catch(err => {
            res.send({
                success: false,
                message: err.message
            });
        })
};
function register(req, res){

    var email = req.body.email;
    return userService.getUserByLogin(req.body.email || '')

    .then(exists => {
        if (exists){
            return res.send({
                success: false,
                message: 'User with this email already registered.'
            });
        }
        var user = {
            email: req.body.email,
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 2)
            
        }  


        return userService.addUser(user)
        .then(() => res.redirect('/'));

    });

};

module.exports = {
    login,
    register
}