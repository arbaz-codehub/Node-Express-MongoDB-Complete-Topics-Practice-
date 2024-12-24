const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("", (_, resp) => {
  const user = {
    name: "Arbaz",
    class: "Bca",
    hobbies: ["playing", "singing", "dancing"],
  };

  resp.render("home", { user });
});

app.listen(5300);
