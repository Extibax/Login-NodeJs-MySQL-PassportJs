const express = require('express');
const expressRouter = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('../lib/helper_auth');

const passport = require('passport');

expressRouter.get('/', isLoggedIn, (req, res) => {
    res.render('index');
});

expressRouter.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('auth/signup');
});

expressRouter.post('/signup', isNotLoggedIn, passport.authenticate('local.signup', {
    successRedirect: '/signup',
    failureRedirect: '/'
}));

module.exports = expressRouter;