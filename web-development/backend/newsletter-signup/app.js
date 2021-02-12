
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/signup.html");
});


app.listen(port, function(){
    console.log("Running on port " + port);
});
