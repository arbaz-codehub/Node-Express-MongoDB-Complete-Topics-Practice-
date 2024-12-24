const express = require("express");
require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
});

app.get("/read", async (req, resp) => {
  let data = await Product.find();
  resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
  // console.log(req.params._id);
  let data = await Product.deleteOne(req.params);
  resp.send("done deletion");
});

app.put("/update/:_id", async (req, resp) => {
  // console.log(req.params._id);
  let data = await Product.updateOne(req.params, { $set: req.body });
  resp.send("done Updated");
});

app.listen(5300);
