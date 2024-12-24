const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/smart-shop";

const main = async () => {
  await mongoose.connect(url);
  const ProductsSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
  });
  const ProductsModel = mongoose.model("products", ProductsSchema);
  let data = new ProductsModel({
    name: "A4",
    brand: "Pata nahi",
    price: 34000,
    category: "mobile hi samjo",
  });
  let result = await data.save();
  console.log(result);
};
main();
