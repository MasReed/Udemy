
const express = require("express");
const app = express();
const port = 3000;


app.get('/', function(req, res){
    res.send("<h1>hello world</h1>");
});

app.get('/contact', function(req, res){
    res.send("<h1>Contact</h1>");
});

app.get('/about', function(req, res){
    res.send("<h1>About Me</h1> This is a short bio.");
});

app.get('/hobbies', function(req, res){
    res.send("coffe, code, beer, bikes");
});

app.listen(port, function() {
    console.log("Server started on port " + port);
});
