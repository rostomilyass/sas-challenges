const prompt = require('prompt-sync')();
let numero = parseInt(prompt('donne moi un nombre avec 4 chiffres '));
let chiffre1 = numero%10
let chiffre2 = Math.floor(numero/10)%10
let chiffre3 = Math.floor(numero/100)%10
let chiffre4 = Math.floor(numero/1000)%10
let newNumero = chiffre1*1000 + chiffre2*100 + chiffre3*10 + chiffre4
console.log(`l'ordre inverse de ${numero} est ${newNumero}`) 