
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// const mailKey = config.MAILCHIMP_KEY;

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.sendFile(__dirname + "/signup.html");
});


app.post('/', function(req, res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userEmail = req.body.userEmail;

    const data = {
        members: [
            {
                email_address: userEmail,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    const listID = "a54eb2ea52";

    const url = "https://us1.api.mailchimp.com/3.0/lists/" + listID;

    const options = {
        method: 'POST',
        auth: "'somestring':53978bdcb6ac7edacf00893be5016f5c-us1"
    };

    const request = https.request(url, options, function(response){

        if (response.statusCode === 200) {
            res.sendFile(__dirname + '/success.html');
        } else {
            res.sendFile(__dirname + '/failure.html');
        };

        response.on('data', function(data){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end()
});


app.post('/failure', function(req, res){
    res.redirect('/');
});


app.listen(port, function(){
    console.log("Running on port " + port);
});
