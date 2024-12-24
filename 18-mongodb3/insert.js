const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  // insert one
  // const result = await db.insertOne({
  //   name: "Y25",
  //   brand: "Oppo",
  //   price: 21000,
  //   category: "mobile",
  // });

  // insert many
  const result = await db.insertMany([
    {
      name: "Note 5",
      brand: "Redmi",
      price: 17000,
      category: "mobile",
    },
    {
      name: "Note 10",
      brand: "Redmi",
      price: 28000,
      category: "mobile",
    },
  ]);

  if (result.acknowledged) console.log("data inserted");
};
insert();
