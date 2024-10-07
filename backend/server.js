const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,"public")))
app.use(cors())
app.use(express.json())

const port = 4000

const db = mysql.createConnection({
    host: "127.0.0.1", 
    user: "root",
    password: "Aries2607@#",
    database: "students"
})

// app.get("/students", (req, res) => {
//     const sql = "SELECT * FROM student_details";
//     db.query(sql, (err, result) => {
//       if (err) res.json({ message: "Server error" });
//       return res.json(result);
//     });
//   });

app.listen(port, () => {
    console.log(`listening on port ${port} `);
  });