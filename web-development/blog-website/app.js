//Packages
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const port = 3000;

const app = express();

//Utilize EJS
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

//Root directory
app.get('/', function(req, res){
    res.send("<h1>Hello</h1>");
});

//Bind server connection
app.listen(port, function(){
    console.log("Server started on port " + port);
})
