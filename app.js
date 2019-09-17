// jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(5500, () => {
    console.log("if you see the message, everything goes well!!!");
});
