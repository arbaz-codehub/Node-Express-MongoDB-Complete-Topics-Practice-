let a = process.argv[2];

let data = new Promise((resolve, reject) => {
  setTimeout(() => resolve(process.argv[3]), 3);
});

data.then((b) => console.log(Number(a) + Number(b)));

// Explanation in Hinglish:

// 1. process.argv se input lena:
// - process.argv[2] ko variable 'a' mein store kiya
// - ye first command line argument hai

// 2. Promise ka use:
// - ek new Promise create kiya jisme resolve aur reject parameters hain
// - setTimeout ka use karke 3ms delay ke baad process.argv[3] ko resolve kiya
// - process.argv[3] second command line argument hai

// 3. Promise handling:
// - data.then() se Promise ka result handle kiya
// - resolve hone par milne wala value 'b' parameter mein aata hai
// - Number() function se string ko number mein convert kiya
// - dono numbers ko add karke console par print kiya

// Example use:
// node index.js 10 20
// Output: 30 (after 3ms delay)
// Kyunki:
// - process.argv[2] = "10" (a)
// - process.argv[3] = "20" (b)
// - Number("10") + Number("20") = 30
