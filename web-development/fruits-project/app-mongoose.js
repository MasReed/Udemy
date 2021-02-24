// Use mongoose
const mongoose = require('mongoose');

// Initialize connection
mongoose.connect('mongodb://localhost:27017/fruitsDB',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

//Fruit schema
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// Fruit model to collection
const Fruit = mongoose.model("Fruits", fruitSchema);

//Create new data entry
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "A standard fruit."
});

//Save to db
// fruit.save();


//Person schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// Fruit model to collection
const Person = mongoose.model("Person", personSchema);

//Create new data entry
const person = new Person({
    name: "John",
    age: 37
});

// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "Awesome"
});

const grape = new Fruit({
    name: "Grape",
    rating: 10,
    review: "Awesomee"
});

const banana = new Fruit({
    name: "Banana",
    rating: 8,
    review: "Awesom"
});


// Fruit.insertMany([kiwi, grape, banana], function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("successfully logged fruits.")
//     }
// })


Fruit.find(function(err, allFruits){
    if (err) {
        console.log(err);
    } else {
        allFruits.forEach(fruit => console.log(fruit.name));

        //close connection
        mongoose.connection.close()
    }
});
