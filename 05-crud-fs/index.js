const fs = require("fs");
const path = require("path");
const dirName = path.join(__dirname, "myFiles");
const fileName = `${dirName}/style.css`;
const newFileName = `${dirName}/stylesss.css`;
const fileData = "p {\n\tfont-size: 20;\n\tcolor: lightgreen;\n}\n";

const addFileData =
  ".myClass {\n\tborder: 1px solid black;\n\tborder-radius: 15px;\n}\n";

// Create (C)
fs.writeFileSync(fileName, fileData);

// Read (R)
fs.readFile(fileName, "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Update (U)
fs.appendFile(fileName, addFileData, (err) => {
  if (err) throw err;
  console.log("Data updated succesfully.");
});

// Rename (Rn)
fs.rename(fileName, newFileName, (err) => console.log(err));

// Delete (D)
fs.unlink(newFileName, (err) => console.log(err));
