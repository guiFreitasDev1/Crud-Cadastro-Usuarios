const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password: "041216",
    database:"pessoasreact",
})

app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
    res.send();
})



module.exports= app;