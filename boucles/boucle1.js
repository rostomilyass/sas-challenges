const prompt = require('prompt-sync')();
let n = parseInt(prompt("donnez un nombre"));
console.log(`la table d emultiplication de ${n}:`)
for (let i = 1; i <= 10; i++) {
    let result = n*i
    console.log(`${n} * ${i} = ${result}`);
}