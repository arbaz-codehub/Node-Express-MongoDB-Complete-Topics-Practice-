const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/smart-shop";

mongoose.connect(url);

const ProductsSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("products", ProductsSchema);
  let data = new Product({
    name: "A4",
    brand: "Pata nahi",
    price: 34000,
    category: "mobile hi samjo",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", ProductsSchema);
  const data = await Product.updateOne(
    { name: "A4" },
    { $set: { price: 40000 } }
  );
};

const deleteInDB = async () => {
  const Product = mongoose.model("products", ProductsSchema);
  let data = await Product.deleteOne({ name: "A4" });
  console.log(data);
};

const findInDB = async () => {
  const Product = mongoose.model("products", ProductsSchema);
  let data = await Product.find();
  console.log(data);
};
findInDB();
