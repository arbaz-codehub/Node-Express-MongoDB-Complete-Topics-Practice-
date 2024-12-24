const dbConnect = require("./mongodb");

const update = async () => {
  // UpdateOne
  // try {
  //   let data = await dbConnect();
  //   let result = await data.updateOne(
  //     { name: "infinix" },
  //     { $set: { brand: "snap-dragon", price: 53000 } }
  //   );
  //   if (result.acknowledged) console.log("Data updated succesfully");
  // } catch (error) {
  //   console.log(`My Error: ${error}`);
  // }

  // UpdateMany
  try {
    let data = await dbConnect();
    let result = await data.updateMany(
      { name: "Y10" },
      { $set: { brand: "Vivo" } }
    );
    if (result.acknowledged) console.log("Data updated succesfully");
  } catch (error) {
    console.log(`My Error: ${error}`);
  }
};
update();
