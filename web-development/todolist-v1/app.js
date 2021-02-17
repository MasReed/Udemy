const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js'); //local module

const port = 3000;
const app = express();

const items = ['Buy Food', 'Cook Food', 'Eat Food'];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// Home Route
app.get('/', function(req, res){
    res.render('list', {listTitle: date.getDate(), newItems: items})
});

app.post('/', function(req, res){
    item = req.body.newItem;

    if (req.body.list === 'Work List'){
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
});


// Work Route
app.get('/work', function(req, res){
    res.render('list', {listTitle: "Work List", newItems: workItems});
});


app.post('/work', function(req, res){
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect('/work');
});


// About Route
app.get('/about', function(req, res){
    res.render('about');
});

app.listen(port, function(){
    console.log("Server started on port " + port)
});
