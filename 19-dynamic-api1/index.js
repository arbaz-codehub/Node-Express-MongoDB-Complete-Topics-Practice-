// Import required modules
const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint - Fetch all documents from collection
app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});

// POST endpoint - Insert a new document
app.post("/", async (req, resp) => {
  let data = await dbConnect();
  // Insert document from request body
  let result = await data.insertOne(req.body);
  resp.send(result);
});

// PUT endpoint - Update document with fixed name "moto edge"
app.put("/", async (req, resp) => {
  console.log(req.body);
  let data = await dbConnect();
  // Update document where name is "moto edge" with request body data
  let result = await data.updateOne({ name: "moto edge" }, { $set: req.body });
  resp.send(result);
});

// PUT endpoint with dynamic name parameter
app.put("/:name", async (req, resp) => {
  console.log(req.body);
  let data = await dbConnect();
  // Update document matching the name parameter with request body data
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  resp.send(result);
});

// DELETE endpoint - Remove document by ID
app.delete("/:id", async (req, resp) => {
  let data = await dbConnect();
  // Convert string ID to MongoDB ObjectId and delete matching document
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
});

// Start server on port 5300
app.listen(5300);

/*
Ye code ek REST API banata hai Express.js aur MongoDB ka use karke. Chalo isko detail mein samajhte hain:

1. Setup & Basic Configuration:
- Sabse pehle Express aur MongoDB ko import kiya gaya hai
- Phir express app create ki gayi hai
- app.use(express.json()) ka matlab hai ki ye JSON data ko handle kar payega

2. API ke Different Endpoints (Raste):

GET / (abhi comment mein hai):
- Ye MongoDB collection se saara data fetch karta hai
- dbConnect() function database se connect karne ke liye use hota hai
- find().toArray() cursor ko array mein convert karta hai
- Phir data response mein bhej deta hai

POST / (ye bhi comment mein hai):
- Frontend se jo data aayega use body mein receive karta hai
- insertOne() se nye document ko database mein add karta hai
- Operation ka result wapas bhej deta hai

PUT / (comment mein hai):
- Ye specific document ko update karta hai jiska name "moto edge" hai
- updateOne() aur $set operator ka use karke fields update karta hai
- Update ka status return karta hai

PUT /:name (ye active hai):
- URL mein name parameter leta hai (dynamic route)
- Jo bhi data body mein aayega, usse us name wale document ko update karega
- $set operator sirf wohi fields update karega jo body mein di gayi hain
- Update ka result return karega

DELETE /:id (ye bhi active hai):
- MongoDB ke _id se document delete karta hai
- String id ko ObjectId mein convert karta hai kyunki MongoDB mein _id ObjectId format mein hoti hai
- deleteOne() se document remove karta hai
- Delete operation ka result return karta hai

Server port 5300 pe chalta hai aur REST ke principles follow karta hai:
- GET: Data lene ke liye
- POST: Naya data create karne ke liye
- PUT: Existing data update karne ke liye
- DELETE: Data delete karne ke liye

Note: Is code mein error handling add ki ja sakti hai try-catch blocks ke saath, 
taki agar koi error aaye to proper error message mile.
*/
