// jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");
const request = require('request');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.get('/', (req, res) => {
//     res.render('index', { button1: 'Login' });
// });

app.get('/', (req, res) => {
    res.render('index', { button1: 'Login' });
});

app.post('/', (req, res) => {
    let userName = req.body.inputEmail;
    let password = req.body.inputPassword;

    if (userName === 'admin' && password === 'admin')
        res.redirect('/todolist');
    else
        res.redirect('/');
});

app.get('/todolist', (req, res) => {

    res.render('todoList');
});


app.listen(5500, () => {
    console.log("if you see the message, everything goes well!!!");
});
