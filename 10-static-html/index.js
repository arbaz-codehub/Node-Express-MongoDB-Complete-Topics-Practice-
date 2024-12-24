const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");
console.log(publicPath);
app.use(express.static(publicPath));

app.listen(5300);

// app.use(express.static(publicPath)) ka explanation:

// 1. app.use() kya hai?
// - Ye Express middleware ko load karne ke liye use hota hai
// - Middleware functions request-response cycle mein processing karte hain

// 2. express.static() kya hai?
// - Ye Express ka built-in middleware hai
// - Static files serve karne ke liye use hota hai (HTML, CSS, Images, etc.)
// - Ye files ko public access deta hai

// 3. publicPath ka use:
// - publicPath directory ka full path hai (jaise: C:\project\public)
// - Is directory mein static files store hoti hain
// - Browser directly in files ko access kar sakta hai

// Example samjhiye:
// Agar aapke public folder mein ye files hain:
// public/
//   |- index.html
//   |- style.css
//   |- images/
//      |- logo.png

// To browser inko aise access karega:
// http://localhost:5300/index.html
// http://localhost:5300/style.css
// http://localhost:5300/images/logo.png

// Bina express.static ke:
// - Har file ke liye alag route banana padta
// - app.get('/style.css', ...)
// - app.get('/images/logo.png', ...)

// express.static ke sath:
// - Automatically sari files serve ho jati hain
// - Security bhi handle karta hai
// - Performance ke liye caching bhi manage karta hai
