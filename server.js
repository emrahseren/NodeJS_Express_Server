var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser());

var todoItems = [
            {id : 1, desc : 'item 11'},
            {id : 2, desc : 'item 22'},
            {id : 3, desc : 'item 33'}
            ];

app.get('/', function(req, res){
    res.render('home', {
        title : "TITLE",
        items : todoItems
    });
    
    //res.send("<h2>Hello, Welcome Node Express</h2>")
    
});

app.post('/add', function(req, res){ 
    var newItem = req.body.newItem;
    todoItems.push({id:9, desc:newItem});
    
    res.redirect('/');
});

app.get('api/user/:id', function(req, res){
    var uid = req.param.id;
    console.log("UID : "+uid);
})
app.get('/login', function(req, res){
    res.render('login');
})
app.listen(1111, function(req, res){
   console.log("1111 port running"); 
});