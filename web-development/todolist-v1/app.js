const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

let items = ['Buy Food', 'Cook Food', 'Eat Food'];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){

    let options = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric"
    };

    let date = new Date().toLocaleDateString("en-AU", options);

    res.render('list', {kindOfDay: date,
                        newItems: items,
                       })
});


app.post('/', function(req, res){
    item = req.body.newItem;
    items.push(item);
    res.redirect('/');
});



app.listen(port, function(){
    console.log("Server started on port " + port)
});
