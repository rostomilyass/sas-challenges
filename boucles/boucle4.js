const prompt = require('prompt-sync')();
let n = parseInt(prompt("donnez un nombre"));
let nombre = 1;

for (let i = 1; i <= n; i++) {
    console.log (nombre)
    nombre = nombre+2
    
}
