const prompt = require('prompt-sync')();
let nombre = parseInt(prompt('donnez moi le nombre que vous voulais inverser'))
let inverse = 0
while( nombre > 0){ 
    let dernierChiffre = nombre % 10;
    inverse = inverse*10 + dernierChiffre
    nombre = Math.floor(nombre/10)
}
console.log(inverse)