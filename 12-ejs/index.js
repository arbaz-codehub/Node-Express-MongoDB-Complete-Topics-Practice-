const express = require("express");
const app = express();
// const path = require()

app.set("view engine", "ejs");

app.get("", (_, resp) => {
  const user = {
    name: "Arbaz",
    class: "BCA",
    hobbies: ["Playing", "Chatgpt", "Games", "Novels"],
  };
  const userName = "Don hu mai";
  resp.render("home", { user, userName });
});

app.listen(5300);

// Code explanation:

// 1. app.set("view engine", "ejs") ka explanation:
// - app.set() Express application ke configuration settings set karne ke liye use hota hai
// - "view engine" ek important setting hai jo template engine specify karta hai
// - "ejs" batata hai ki hum EJS template engine use kar rahe hain

// 2. EJS (Embedded JavaScript) kya hai?
// - EJS ek template engine hai jo HTML mein dynamic content add karne ki capability deta hai
// - JavaScript code ko HTML ke andar embed karne ki facility deti hai
// - <%= %> syntax se variables aur expressions render kar sakte hain

// 3. Code flow samjhiye:
// - User jab "/" route pe request karta hai
// - app.get("", ...) handler execute hota hai
// - Handler mein user object aur userName variable define kiye gaye hain
// - resp.render("home", {...}) se home.ejs template render hota hai
// - Template mein <%= user.name %> aur <%= userName %> dynamic values replace ho jati hain

// 4. Views folder structure:
// - By default, EJS templates 'views' folder mein rakhne hote hain
// - home.ejs views folder mein hai
// - Template ka extension .ejs hona zaroori hai

// 5. Benefits of using EJS:
// - HTML ke sath JavaScript logic easily mix kar sakte hain
// - Dynamic content render karna simple ho jata hai
// - Reusable components bana sakte hain (partials)
// - Performance better hai kyunki server-side rendering hota hai
// - Learning curve kam hai kyunki syntax JavaScript jaisa hai

// 6. Alternative approaches:
// - Static HTML: Limited functionality, no dynamic content
// - Other template engines: Pug, Handlebars, etc.
// - Client-side rendering: More complex, needs separate API
