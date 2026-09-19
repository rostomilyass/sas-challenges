const prompt = require('prompt-sync')();
let n = parseInt(prompt("donnez un nombre"));
let nombre = 0;

for (let i = 1; i <= n; i++) {
    nombre = nombre+2
     console.log (nombre)
}