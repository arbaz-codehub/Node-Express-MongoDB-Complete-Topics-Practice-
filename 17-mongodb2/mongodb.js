// const MongoClient = require("mongodb").MongoClient;
const { MongoClient } = require("mongodb");
const database = "smart-shop";

// Connection URL
const url = "mongodb://localhost:27017";

// Passing URL to MongoClient
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
}

module.exports = dbConnect;
