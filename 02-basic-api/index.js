const http = require("http");
const apiData = require("./apiData");
http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "applicationjson" });
    resp.write(JSON.stringify(apiData));
    resp.end();
  })
  .listen(5300);

// Explanation in Hinglish:

// 1. resp.writeHead(200, {...}) ke bare mein:
// writeHead ka use hum response ka header set karne ke liye karte hain
// 200 status code ka matlab hai "OK" - yani request successful rahi
// Content-Type batata hai ki response mein kis type ka data bhej rahe hain
// Headers important hain kyunki ye client ko batate hain ki data kaise process karna hai

// 2. Headers ki importance:
// - Security ke liye important hain
// - Browser ko batate hain ki response ko kaise handle karna hai
// - API versioning ke liye use hote hain
// - Cross-origin requests control karne mein help karte hain

// 3. resp.write() ke bare mein:
// - Actual data/content ko client ke pass bhejne ke liye use hota hai
// - Multiple baar bhi call kar sakte hain agar chunks mein data bhejna ho

// 4. JSON.stringify() ka use:
// - apiData ek JavaScript object/array hai
// - HTTP sirf text/string data transfer kar sakta hai
// - isliye apiData ko string mein convert karna padta hai
// - JSON.stringify() JavaScript object ko JSON string mein convert karta hai

// 5. resp.end() ke bare mein:
// - Server ko batata hai ki response complete ho gaya hai
// - Agar end() nahi karenge to client wait karta rahega aur request hanging mein rahegi
// - Resources free karne ke liye bhi important hai
// - Connection close karne ke liye jaruri hai
