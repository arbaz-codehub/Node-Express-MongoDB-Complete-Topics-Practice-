const express = require("express");
const app = express();

app.get("", (req, resp) => {
  resp.send(
    `<h1>Hello Bhaiyaaa kaa haalchal😏</h1> <a href="/about">about page dekhoge??</a>`
  );
});

app.get("/about", (req, resp) => {
  resp.send(`<h3>About page hai</h3> <a href="/">Bhaiya wapas jaye<a/>`);
});

app.listen(5300);
