const mysql = require('mysql');
const config = require('../utils/config.js');
const createConnection = require("mysql").createConnection;
var connection = {
    create: function (callback) {
        var connection = createConnection(config.databaseOptions);
        connection.connect(function(err) {
            if (err) throw err;
            callback(connection);
        });
    }
}

module.exports = connection;