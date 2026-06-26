const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'cms_db'
});

db.connect((err) => {
    if (err) {
        console.log("Gagal:");
        console.log(err);
    } else {
        console.log("Berhasil terhubung");
    }
    db.end();
});