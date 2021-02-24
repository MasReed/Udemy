// Require packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const date = require(__dirname + '/date.js'); //local module

// App instance
const port = 3000;
const app = express();

// Utilize EJS, body-parser, express
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));


// Connect to MongoDB server
mongoose.connect("mongodb://localhost:27017/todolistDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// Items schema
const itemsSchema = new mongoose.Schema({
    name: String
});

const Item = new mongoose.model("Item", itemsSchema);


// Default items
const item1 = new Item({
    name: "Welcome to your todo list!"
});

const item2 = new Item({
    name: "Hit the '+' button to add a new item."
});

const item3 = new Item({
    name: "<-- Check this to cross off an item."
});

const defaultItems = [item1, item2, item3]


// List Schema
const listSchema = {
    name: String,
    items: [itemsSchema]
}

const List = mongoose.model("List", listSchema);


// HOME ROUTE
app.get('/', function(req, res) {

    // Get all items in DB
    Item.find({}, function(err, allItems) {
        if (err) {
            console.log(err);
        } else if (allItems.length === 0) {
            // Insert default items only if no other items
            Item.insertMany(defaultItems, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Saved default items to DB");
                }
            });
            res.redirect('/');
        } else {
            res.render('list', {
                listTitle: date.getDate(),
                newItems: allItems
            })
        }
    });
});

// Add New Item
app.post('/', function(req, res) {

    const itemName = req.body.newItem;
    const listName = req.body.list;

    const item = new Item({
        name: itemName
    });

    if (listName === date.getDate()){
        item.save();
        res.redirect('/');
    } else {
        List.findOne({name: listName}, function(err, foundList){
            foundList.items.push(item);
            foundList.save();
            res.redirect('/' + listName);
        });
    }
});

// Delete Item
app.post('/delete', function(req, res) {

    const checkedItemId = req.body.checkbox;

    Item.findByIdAndRemove(checkedItemId, function(err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});


// DYNAMIC ROUTE
app.get('/:customListName', function(req, res){

    const customListName = req.params.customListName;

    List.findOne({name: customListName}, function(err, foundList){
        if (!err){
            if (!foundList){
                // Create a new list
                const list = new List({
                    name: customListName,
                    items: defaultItems
                });

                list.save();
                res.redirect("/" + customListName);
            } else {
                // Show an existing list
                res.render('list', {
                    listTitle: foundList.name,
                    newItems: foundList.items
                });
            }
        }
    });
});





// ABOUT ROUTE
app.get('/about', function(req, res) {
    res.render('about');
});


// Port connection
app.listen(port, function() {
    console.log("Server started on port " + port)
});
