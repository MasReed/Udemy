
const { MongoClient } = require("mongodb");

// Connection URI
const url = 'mongodb://localhost:27017';

// Create new MongoClient instance
const client = new MongoClient(url, { useUnifiedTopology: true });

async function run() {
    try {
        // Connect client to server
        await client.connect();

        // Establish and verify connection
        await client.db("fruitsDB").command({ ping : 1 });
        console.log("Connected 2 successfully to server");

        // Use database
        const database = client.db('fruitsDB');
        const collection = database.collection('fruits');

        // Database interaction
        const query = { name: "Apple" };
        const theFruit = await collection.findOne(query);
        console.log(theFruit);



    } finally {
        // Ensures that the client termination
        await client.close();
    }
}

run().catch(console.dir);
