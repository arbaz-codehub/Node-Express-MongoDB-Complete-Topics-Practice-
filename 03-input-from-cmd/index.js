const fs = require("fs");
const input = process.argv;

if (input[2] == "add") fs.writeFileSync(input[3], input[4]);
else if (input[2] == "delete" || "remove") fs.unlinkSync(input[3]);
else console.log("Invalid Input");

// Explanation in Hinglish:

// 1. process.argv kya hai?
// - ye ek array hai jo command line arguments store karta hai
// - input[0]: Node.js ka execution path hota hai (node ka location)
// - input[1]: Running file ka path hota hai (hamare program ka location)
// - input[2] se actual user arguments start hote hain

// 2. Code ka flow:
// Agar user "add" command deta hai:
// node index.js add file.txt "Hello"
//                 |    |      |
//             input[2] input[3] input[4]
// To ek new file create hogi "file.txt" naam se "Hello" content ke sath

// Agar user "delete/remove" command deta hai:
// node index.js delete file.txt
//                 |      |
//             input[2]  input[3]
// To "file.txt" delete ho jayegi

// 3. fs (File System) functions:
// - writeFileSync: New file create karta hai ya existing file mein content write karta hai
// - unlinkSync: File ko delete karta hai

// 4. Error handling:
// Agar invalid command di jaye to "Invalid Input" print hoga

// Example commands:
// node index.js add myfile.txt "This is content"
// node index.js delete myfile.txt
