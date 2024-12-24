const express = require("express");
const reqFilter = require("./middleware");
const app = express();
const route = express.Router();

// app.use(reqFilter);
route.use(reqFilter);
route.get("", (res, resp) => {
  resp.send("Welcome to Home page");
});

app.get("/users", (res, resp) => {
  resp.send("Welcome to Users page");
});

route.get("/about", (res, resp) => {
  resp.send("Welcome to About page");
});
route.get("/contact", (res, resp) => {
  resp.send("Welcome to contact page");
});

app.use("", route);

app.listen(5300);

// Code explanation in Hindi:

// 1. Basic Setup:
// - express ko import kiya gaya hai
// - reqFilter middleware ko import kiya gaya hai (./middleware.js se)
// - express app create ki gayi
// - express Router create kiya gaya

// 2. Middleware Setup:
// - app.use(reqFilter) ko comment kiya gaya hai - ye pure app pe middleware apply karta
// - route.use(reqFilter) - ab middleware sirf route object ke routes pe apply hoga
// - reqFilter age verification karta hai (age > 18 honi chahiye)

// 3. Routes Setup:
// Router ke through routes:
// - "/" - Home page
// - "/about" - About page
// - "/contact" - Contact page
// Ye saare routes pe age verification middleware lagega

// App ke through direct route:
// - "/users" - Users page
// Is route pe middleware nahi lagega kyunki ye Router ka part nahi hai

// 4. Router Integration:
// app.use("", route) ka detailed explanation:
// - is line se Router object ko main Express app se integrate/connect kiya jata hai
// - "" (empty string) as base path ka matlab:
//   - Router ke saare routes direct URLs se accessible honge
//   - Agar "/api" base path hota to routes "/api/about", "/api/contact" se access hote
//
// Example paths after integration:
// - route.get("") -> http://localhost:5300/
// - route.get("/about") -> http://localhost:5300/about
// - route.get("/contact") -> http://localhost:5300/contact
//
// Router ke benefits:
// - Routes ko modular way mein organize kar sakte hain
// - Different route groups ke liye different middleware set kar sakte hain
// - Code maintainable aur scalable ban jata hai

// 5. Server Start:
// app.listen(5300) - server port 5300 pe start hoga

// Main Points:
// - Router middleware specific routes pe middleware apply karne ke liye use hota hai
// - Bina Router ke pure app pe middleware apply hota
// - Router code ko modular aur manageable banane mein help karta hai
// - Different routes ke liye different middleware combinations possible hain
