const express = require("express");
const app = express();

app.use((req, resp, next) => {
  // console.log("Middleware chla bhai abhi");
  if (!req.query.age) resp.send("Please provide age");
  else {
    if (req.query.age > 18) next();
    else resp.send("You are not eligible for this site");
  }
  next();
});

app.get("", (_, resp) => resp.send("Hello Home"));

app.get("/about", (_, resp) => resp.send("Hello About"));

app.get("/help", (_, resp) => resp.send("Hello Help"));

app.get("*", (_, resp) => resp.send("404 Page not found"));

app.listen(5300);

// Code explanation:

// 1. Middleware kya hai?
// - Middleware functions wo functions hain jo request-response cycle ke beech mein execute hote hain
// - Request aur response objects tak access provide karte hain
// - Request ko modify kar sakte hain ya response ko customize kar sakte hain
// - next() function se control next middleware ya route handler ko pass karte hain

// 2. Middleware types:
// A. Application-level middleware (app.use):
//    - Pure application mein apply hota hai
//    - Example: Current code mein age verification middleware

// B. Built-in middleware:
//    - express.json() - JSON parsing ke liye
//    - express.urlencoded() - Form data parse karne ke liye
//    - express.static() - Static files serve karne ke liye

// C. Third-party middleware:
//    - cookie-parser: Cookie handling
//    - morgan: Logging
//    - cors: Cross-origin resource sharing
//    - helmet: Security headers
//    - body-parser: Request body parsing

// 3. Middleware use karne ke benefits:
// - Code reusability (DRY principle)
// - Authentication/Authorization
// - Input validation
// - Logging
// - Error handling
// - Request preprocessing
// - Response customization

// 4. Current code analysis:
// - app.use((req, resp, next) => {...}) - Application level middleware hai
// - Age verification logic implement karta hai
// - Query parameters check karta hai (?age=XX)
// - Age > 18 hai to next() se route handlers tak pahunchta hai
// - Age < 18 ya missing hai to error response bhejta hai

// 5. Common mistake in current code:
// - Double next() call ho raha hai (else block mein aur last mein)
// - This can cause "Cannot set headers after they are sent" error
// - Fix: Remove the last next() call
