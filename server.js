// Nuh Emrah Seren
// Noah^s Ark - seren@gmail.com
// June 2018 - Istanbul 

// Express lib.
var express = require('express');
// File path etc. __dirname  lib.
var path = require('path');
// BodyParser lib.
var bodyParser = require('body-parser');
// FileRead lib.
var fs = require('fs');
// CREATE app by Express
var app = express();


// SET app view pages file type by Express
app.set('view engine', 'ejs');
// SET view pages folder 
app.set('views', path.join(__dirname, 'views'));

// Set middleware param to parse from form input parameter
app.use(bodyParser());

// Global list variable
var todoItems = [
    { id: 1, desc: 'item 11' },
    { id: 2, desc: 'item 22' },
    { id: 3, desc: 'item 33' }
];


// GET - Rote base folder and send Item list to the FrondEnd Side
app.get('/', function (req, res) {
    console.log('dddddddddd')
    res.render('home', {
        title: "Rest API",
        items: todoItems
    });
    //res.send("<h2>Hello, Welcome Node Express</h2>")
});


// POST - read input from post 
app.post('/add', function (req, res) {
    var newItem = req.body.newItem;
    todoItems.push({ id: 0, desc: newItem });
    res.redirect('/');
});


// GET - Read JSON file from local post RESTFull Service
app.get('/read', function (req, res) {
    fs.readFile('./files/data.json', function (err, data) {
        if (err) throw err;
        var array = data.toString().split("\n");
        res.json(array);
    });
});

app.get('/readjson', function (req, res) {
    fs.readFile('./files/sample.json', function (err, data) {
        if (err) throw err;
        var array = data.toString();
        res.type('json')
        res.send(array);
    });
});

// GET Render view page example   ----------------------
app.get('/login', function (req, res) {
    res.render('login');
})

// GET - GET URL Parameter ------------------------------
app.get('/api/user/:id', function (req, res) {
    var uid = req.param('id');
    res.send(uid)
})

// SETUP server listenner and add port. ----------------
app.listen(1111, function (req, res) {
    console.log("1111 port running");
});


