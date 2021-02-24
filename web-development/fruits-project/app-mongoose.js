
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB',
    {useNewUrlParser: true, useUnifiedTopology: true}
);



//FRUITS
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "No nameless fruits!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String
});

const Fruit = mongoose.model("Fruits", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "A standard fruit."
});

// fruit.save();


//PERSONS
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//     name: "John",
//     age: 37
// });

// person.save();

//CRUD Methods

// CREATE FRUITS
// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "Awesome"
// });
//
// const grape = new Fruit({
//     name: "Grape",
//     rating: 10,
//     review: "Awesomee"
// });
//
// const banana = new Fruit({
//     name: "Banana",
//     rating: 8,
//     review: "Awesom"
// });
const pineapple = new Fruit({
    name: "Pineapple",
    rating: 7,
    review: "Awm"
});

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
})

person.save();


// Fruit.insertMany([kiwi, grape, banana], function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("successfully logged fruits.")
//     }
// })



// QUERY FRUITS
Fruit.find(function(err, allFruits){
    if (err) {
        console.log(err);
    } else {
        allFruits.forEach(fruit => console.log(fruit.name));

        //close connection
        mongoose.connection.close()
    }
});


// UPDATE FRUITS
Fruit.updateOne({_id: "60368b81c32f5124a888b3f0"}, {rating: 11}, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Updated doc");
    }
});


// DELETE ENTRY
Fruit.deleteOne({_id: "60368c5ffba72f38f47bec98"}, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Deleted doc");
    }
});


// DELETE MANY
Person.deleteMany({name: "John"}, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Deleted many docs");
    }
});
