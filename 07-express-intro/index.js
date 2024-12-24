const express = require("express");
const app = express();

app.get("", (req, resp) => resp.send("Home Page hai bhaiyaaaa!!!"));

app.get("/about", (req, resp) => resp.send("About Page hai bhaiya!"));

app.get("/contact", (req, resp) => resp.send("Contact Page hai bhaiya!"));

app.listen(5300);

// Express.js Code Explanation in Hinglish:

// 1. Express module ko import karna:
// const express = require("express") - Express framework ko import karta hai
// ye express ek function return karta hai, jise hum variable mein store karte hain

// 2. express() function ka use:
// const app = express() - Express application ka instance create karta hai
// - Hum express() ko direct use nahi kar sakte kyunki:
//   a) Har application ke liye alag configuration chahiye hoti hai
//   b) Multiple applications ko alag-alag port par chalana possible hona chahiye
//   c) Har application ke routes, middleware, settings alag ho sakte hain

// 3. Routes kaise kaam karte hain:
// app.get("", ...) - Root URL ke liye (http://localhost:5300/)
// app.get("/about", ...) - About page ke liye (http://localhost:5300/about)
// app.get("/contact", ...) - Contact page ke liye (http://localhost:5300/contact)
// - Har route mein callback function hai jo request aur response handle karta hai
// - resp.send() se browser ko response bhejte hain

// 4. Server start karna:
// app.listen(5300) - Server ko port 5300 par start karta hai
// - Ab aap browser mein http://localhost:5300 par ja sakte hain

// Real-life Example:
// Ye aise hai jaise ek restaurant (express) se franchise (app) lena
// - Har franchise ka apna menu (routes) ho sakta hai
// - Har franchise ka apna staff (middleware) ho sakta hai
// - Har franchise ka apna location (port) hota hai
// - Par basic framework (express) same rehta hai
