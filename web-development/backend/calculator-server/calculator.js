
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


// A SIMPLE ADDITION
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The addition of " + num1 + " + " + num2 + " is: " + result);
});


// CALCULATE BMI
app.get('/bmiCalculator', function(req, res){
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmiCalculator', function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = weight / (height * height);

    res.send("The BMI is " + bmi);
});


// listen for server
app.listen(port, function(){
    console.log("server started on port " + port);
});
