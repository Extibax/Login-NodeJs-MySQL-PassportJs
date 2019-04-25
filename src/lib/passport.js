const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const database = require('../database/database_connection');
const { encryptPassword } = require('../lib/helper_pass');

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const { firstname } = req.body;
    const { lastname } = req.body;
    const newUser = {
        username: username,
        password: password,
        first_name: firstname,
        last_name: lastname
    }
    newUser.password = await encryptPassword(password);
    const result = await database.query("INSERT INTO users SET ?", [newUser]);
    newUser.id = result.insertId;
    console.log(result);
    return done(null, newUser);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const rows = await database.query("SELECT * FROM users WHERE id = ?", [id]);
    done(null, rows[0]);
});