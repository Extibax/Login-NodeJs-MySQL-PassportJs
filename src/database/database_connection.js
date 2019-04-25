const mysql = require('mysql');
const colors = require('colors');
const { promisify } = require('util');

const { keys } = require('./database_keys');

const database = mysql.createPool(keys);

database.getConnection((errors, connection) => {
    if (connection) {
        connection.release();
        console.log(colors.yellow('DB is Connected Successfully'));
    } else {
        console.log(colors.red("DB Connection is Wrong" + errors));
    }
});

let result;

result = database.query("SELECT * FROM users"), (result) => {
    console.log("Hola ", result);
};

/* Promisify Pool Queries */
database.query = promisify(database.query);

module.exports = database;