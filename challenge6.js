const prompt = require('prompt-sync')();
let a = parseFloat(prompt('donne moi ton nombre a '));
let b = parseFloat(prompt('donne moi ton nombre b '));
let adittion = a + b;
let Soustraction = a - b;
let Multipl = a * b;
let division = a / b;
console.log(`voila les calculs :  
- a+b=${adittion}
- a-b= : ${Soustraction}
- a*b : ${Multipl} 
- a / b : ${division}`);