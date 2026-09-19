const prompt = require('prompt-sync')();
let n = parseInt(prompt("donnez un nombre"));
let facto = 1;
for (let i = 1; i <= n; i++) {
    facto=facto*i
}
console.log(`la facrotielle de ${n} est ${facto}`)