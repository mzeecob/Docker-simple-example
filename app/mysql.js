var mysql = require('mysql2/promise');

var con = mysql.createPool({
    host: "mysql-book",
    user: "root",
    password: "rootroot123",
    database: "book-store",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


module.exports = con;
