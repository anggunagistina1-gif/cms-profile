const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(express.json());

// Koneksi database
const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'cms_db'
});

db.connect((err) => {
    if (err) {
        console.log('Koneksi gagal:', err);
    } else {
        console.log('Database terkoneksi');
    }
});
// Test server
app.get('/', (req, res) => {
    res.send('Server Node.js berjalan');
});

// get artikel
app.get('/artikel', (req, res) => {

    const sql = "SELECT * FROM artikel ORDER BY id DESC";

    db.query(sql, (err, result) => {

        if (err) {
            res.json({ status: "error" });
        } else {
            res.json(result);
        }

    });

});
// tambah artikel
app.post('/artikel', (req, res) => {

    const { judul, isi } = req.body;

    const sql = "INSERT INTO artikel (judul, isi) VALUES (?, ?)";

    db.query(sql, [judul, isi], (err, result) => {

        if (err) {
            res.json({ status: "error" });
        } else {
            res.json({ status: "success" });
        }

    });

});
// edit artikel
app.put('/artikel/:id', (req, res) => {

    const id = req.params.id;
    const { judul, isi } = req.body;

    const sql = "UPDATE artikel SET judul=?, isi=? WHERE id=?";

    db.query(sql, [judul, isi, id], (err, result) => {

        if (err) {
            res.json({ status: "error" });
        } else {
            res.json({ status: "success" });
        }

    });

});
// hapus artikel
app.delete('/artikel/:id', (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM artikel WHERE id=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            res.json({ status: "error" });
        } else {
            res.json({ status: "success" });
        }

    });

});
app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
});