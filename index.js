const express = require('express');
require('./db/config');
const users = require('./db/Users');

const app = express();

app.post("/register", (req, res) => {
    res.send("Api is working.");
    console.log(users);
})

app.listen(5000)
