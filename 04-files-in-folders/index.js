const fs = require("fs"); // Creating File System
const path = require("path");
const dirPath = path.join(__dirname, "myFiles");
console.log(dirPath);

fs.writeFileSync(`${dirPath}/test.js`, "const arr = [1, 2, 3, 4, 5];");

// More deeper path
const dirPath2 = path.join(__dirname, "myFiles/deeperFiles");
fs.writeFileSync(`${dirPath2}/deepTest.js`, "const arr = [1, 2, 3, 4, 5];");

// Using for loop to make multiple files
// for (let i = 1; i <= 5; i++) {
//   fs.writeFileSync(
//     `${dirPath2}/NestedFile${i}.js`,
//     `const arr${i} = [1, 2, 3, 4, 5];`
//   );
// }

// Reading files in a directory
fs.readdir(dirPath2, (err, files) => {
  console.log(files, typeof files);
  files.forEach((file) => console.log(file));
});

// Explanation in Hinglish:

// 1. File System (fs) aur Path modules:
// - fs: Files aur folders ko create, read, update ya delete karne ke liye
// - path: System ke paths ko handle karne ke liye (Windows/Linux paths alag hote hain)

// 2. Directory Paths:
// - __dirname: Current file ka folder path
// - path.join(): Multiple paths ko properly join karta hai
// dirPath = current_folder/myFiles
// dirPath2 = current_folder/myFiles/deeperFiles

// 3. File Creation:
// - writeFileSync: Synchronously new file create karta hai
// - First file: myFiles/test.js mein array ka code likha
// - Second file: myFiles/deeperFiles/deepTest.js mein same array ka code

// 4. Multiple Files (commented code):
// - For loop se 5 files create kar sakte hain
// - Har file ka naam NestedFile1.js, NestedFile2.js etc
// - Har file mein arr1, arr2 etc arrays create kiye

// 5. Reading Directory:
// - readdir: Folder ke andar ki files ki list deta hai
// - Callback function 2 parameters leta hai: error aur files array
// - forEach se har file ka naam console par print karta hai
// - typeof files: Array hota hai

// Example:
// Agar aap ye code run karenge to:
// 1. myFiles folder mein test.js banega
// 2. myFiles/deeperFiles mein deepTest.js banega
// 3. Agar commented code uncomment karein to 5 aur files banegi
// 4. readdir se in sabhi files ki list console par dikhegi
