const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.post('/', function(req, res){

    var userQuery = req.body.cityName;

    const query = userQuery;
    const apiKey = "f3dc5ed4788fcb54bbf53f0c17066400";
    const unit = "imperial";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey;

    https.get(url, function(response){
        // console.log("Status Code: " + response.statusCode);

        response.on('data', function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

            res.write("<h1>The temp in " + weatherData.name + " is " + temp + " degrees F.</h1>");
            res.write("<h3>The weather is currently " + desc + "</h3>");
            res.write("<img src=" + iconUrl + ">");

            res.send();
        });
    });
});


app.listen(port, function(){
    console.log("server running on port " + port);
});
