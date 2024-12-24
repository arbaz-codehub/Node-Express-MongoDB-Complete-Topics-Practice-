const express = require("express");
const path = require("path");

const app = express();
const pathPublic = path.join(__dirname, "public");

app.get("", (_, resp) => {
  resp.sendFile(`${pathPublic}/index.html`);
});

app.get("/about", (_, resp) => {
  resp.sendFile(`${pathPublic}/about.html`);
});

app.get("*", (_, resp) => {
  resp.sendFile(`${pathPublic}/nopage.html`);
});

app.listen(5300);

// Code explanation:

// 1. Current approach (Using app.get):
// - Har route ke liye explicit handler define kiya hai
// - app.get("", ...) -> index.html ke liye
// - app.get("/about", ...) -> about.html ke liye
// - app.get("*", ...) -> 404 page ke liye
// - sendFile method se specific HTML files serve ki ja rahi hain

// 2. express.static approach:
// - Automatically sare static files serve kar deta hai
// - Koi explicit routes define nahi karne padte
// - Performance better hoti hai (caching ki wajah se)
// - Security features built-in hote hain

// Comparison:

// Current approach ke benefits:
// + More control over routing
// + Custom logic add kar sakte hain har route pe
// + 404 handling explicit hai
// + Routes ki clarity better hai

// express.static ke benefits:
// + Less code likhna padta hai
// + Automatically handles all static files (HTML, CSS, JS, images)
// + Better performance due to built-in caching
// + Security features built-in
// + Scalable - new files add karne pe code change nahi karna padta

// Recommendation:
// - Agar sirf static files serve karni hain -> Use express.static()
// - Agar routes pe custom logic chahiye -> Current approach better hai
// - Best practice: Dono approaches combine kar sakte hain
//   express.static() for static assets (CSS/JS/images)
//   Custom routes for pages with specific logic
