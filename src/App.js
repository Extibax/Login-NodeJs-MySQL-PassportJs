const express = require('express');
const express_session = require('express-session');
const mysqlstore = require('express-mysql-session');
const expresshandlebars = require('express-handlebars');
const passport = require('passport');
const path = require('path');
const colors = require('colors');
const morgan = require('morgan');

const { keys } = require('./database/database_keys');

/* Initializations */
const app = express();
require('./lib/passport');

/* Settings */
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expresshandlebars({
    /* defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'), */
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

/* Middlewars */
app.use(express_session({
    secret: 'random_secrete_string',
    resave: false,
    saveUninitialized: false,
    store: new mysqlstore(keys)
}));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use(require('./routes/authentication'));

/* Public */
app.use(express.static(path.join(__dirname, 'public')));

/* Starting the server */
app.listen(app.get('port'), () => {
    console.log(colors.yellow('Server on port: ', app.get('port')));
    console.log(colors.yellow('¡Welcome devs! Visit: localhost:4000 to deploy'));
});