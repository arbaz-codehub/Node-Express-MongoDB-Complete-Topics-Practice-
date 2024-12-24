const dbConnect = require("./mongodb");

const deleteData = async () => {
  // deleteOne
  // const data = await dbConnect();
  // const result = await data.deleteOne({ name: "Y10" });
  // if (result.acknowledged) console.log("Data Deleted Succesfully");

  // deleteMany
  const data = await dbConnect();
  const result = await data.deleteMany({ name: "Y10" });
  if (result.acknowledged) console.log("Data Deleted Succesfully");
};

deleteData();
