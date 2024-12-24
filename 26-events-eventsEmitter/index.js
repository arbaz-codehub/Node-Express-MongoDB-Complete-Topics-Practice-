const express = require("express");
const EventEmitter = require("events");
const app = express();
const event = new EventEmitter();

let count = 0;
event.on("countAPI", () => {
  count++;
  console.log(`api click count is: ${count}`);
});

app.get("/", (req, resp) => {
  resp.send("API Called");
  event.emit("countAPI");
});

app.get("/search", (req, resp) => {
  resp.send("search API Called");
  event.emit("countAPI");
});

app.get("/update", (req, resp) => {
  resp.send("update API Called");
  event.emit("countAPI");
});

app.listen(5300);
