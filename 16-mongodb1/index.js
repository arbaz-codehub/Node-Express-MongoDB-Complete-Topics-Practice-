// const MongoClient = require("mongodb").MongoClient;
const { MongoClient } = require("mongodb");
const database = "smart-shop";

// Connection URL
const url = "mongodb://localhost:27017";

// Passing URL to MongoClient
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("products");
  let response = await collection.find({}).toArray();
  console.log(response);
}
getData();

// Code explanation in Hindi:

// 1. MongoDB Connection Setup:
// - MongoClient ko import kiya gaya hai mongodb package se
// - Destructuring syntax use karke { MongoClient } ko directly import kiya
// - database variable mein database ka naam "smart-shop" store kiya
// - url variable mein local MongoDB server ka URL "mongodb://localhost:27017" store kiya
// - new MongoClient(url) se MongoDB client ka instance create kiya

// 2. getData() Function:
// - async function hai kyunki MongoDB operations asynchronous hote hain
// - client.connect() se MongoDB server se connection establish karta hai
// - result.db(database) se "smart-shop" database select karta hai
// - db.collection("products") se "products" collection select karta hai
// - collection.find({}) se saare documents find karta hai
//   - {} empty object pass karne ka matlab hai ki koi filter nahi hai
//   - toArray() se cursor ko array mein convert karta hai
// - console.log(response) se saare documents console pe print karta hai

// 3. Function Call:
// - getData() function ko call kiya gaya hai
// - Ye function MongoDB se data fetch karke console pe print karega

// Important Points:
// - MongoDB ek NoSQL database hai
// - Collections SQL tables ki tarah hote hain
// - Documents SQL rows ki tarah hote hain
// - find() method documents ko search karne ke liye use hota hai
// - async/await ka use asynchronous operations ko handle karne ke liye kiya gaya hai

// ===========================================================================================
// // Step 1: Import MongoDB
// const { MongoClient } = require("mongodb");

// // Step 2: Set Database Name & Connection URL
// const database = "smart-shop";
// const url = "mongodb://localhost:27017";

// // Step 3: Create MongoDB Client Instance
// const client = new MongoClient(url);

// // Step 4: Connect to MongoDB Server
// let result = await client.connect();

// // Step 5: Get Database Reference
// let db = result.db(database);

// // Step 6: Get Collection Reference
// let collection = db.collection("products");

// // Step 7: Find Documents & Convert to Array
// let response = await collection.find({}).toArray();
