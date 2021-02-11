
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


//CALCULATE Farenheit from Celcius
app.get('/f-to-c', function(req, res){
    res.sendFile(__dirname + '/f-to-c.html');
});

app.post('/f-to-c', function(req, res){

    var deg_f = Number(req.body.deg_f);

    var deg_c = (deg_f - 32) * (5/9);

    res.send(deg_f + " F is " + deg_c + " C.");
})


//Calculate Celcius from Farenheit
app.get('/c-to-f', function(req, res){
    res.sendFile(__dirname + '/c-to-f.html');
});

app.post('/c-to-f', function (req, res){
    var deg_c = Number(req.body.deg_c);
    var deg_f = (deg_c * (9/5)) + 32;
    res.send(deg_c + " C is " + deg_f + " F.");
});


// listen for server
app.listen(port, function(){
    console.log("server started on port " + port);
});
