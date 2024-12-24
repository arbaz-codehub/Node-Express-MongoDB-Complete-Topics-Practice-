const express = require("express");
const app = express();

app.get("", (req, resp) => {
  // console.log(req.query.name);
  resp.send("Home Page hai bhaiyaaaa!!!" + req.query.name);
});

app.get("/about", (req, resp) => resp.send("About Page hai bhaiya!"));

app.get("/contact", (req, resp) => resp.send("Contact Page hai bhaiya!"));

app.get("/help", (req, resp) => resp.send(`<h1>Help Page hai bhaiya</h1>`));

app.listen(5300);

// req.query ka explanation:

// 1. req.query kya hai?
// - URL mein ? ke baad jo parameters aate hain, unhe query parameters kehte hain
// - Jaise: http://localhost:5300?name=Anil
// - Yahan 'name' query parameter hai jiska value 'Anil' hai
// - req.query.name se ye 'Anil' value mil jayegi

// 2. req.query ka use kab karte hain?
// - Jab URL se data receive karna ho
// - Multiple parameters bhi bhej sakte hain:
//   http://localhost:5300?name=Anil&age=25
//   Isse req.query = { name: 'Anil', age: '25' }

// 3. Common query parameters examples:
// - Search queries: /search?q=mobile
// - Filters: /products?category=electronics&price=1000
// - Pagination: /users?page=2&limit=10
// - Sorting: /posts?sort=date&order=desc

// 4. req ke sath aur bhi parameters:
// - req.params: URL path parameters (/users/:id)
// - req.body: POST request ka data
// - req.headers: HTTP headers
// - req.cookies: Browser cookies
// - req.ip: Client ka IP address

// Example use in code:
app.get("/search", (req, resp) => {
  // URL: /search?item=phone&brand=samsung
  console.log(req.query.item); // "phone"
  console.log(req.query.brand); // "samsung"
  resp.send(`Searching for ${req.query.brand} ${req.query.item}`);
});
