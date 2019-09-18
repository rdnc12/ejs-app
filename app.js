// jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");


var nameList = [];
var todolist = ['Sabah', 'Ogle', 'Ikindi', 'Aksam'];
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.render('index', { button1: 'Login', isError: false });
});

app.post('/', (req, res) => {
    let userName = req.body.inputEmail;
    let password = req.body.inputPassword;

    nameList.push(userName);

    if (userName === 'admin' && password === 'admin')
        res.redirect('/todolist');
    else
        res.render('index', { button1: 'Login',isError: true });
});

app.get('/todolist', (req, res) => {
    if(nameList.length!==0)
    res.render('todolist', { name: nameList, toDo: todolist });
    else
        res.status(401).send('401 Unauthorized');
});


app.listen(5500, () => {
    console.log("if you see the message, everything goes well!!!");
});
