const prompt = require('prompt-sync')();
let texte = prompt("ecrire un texte ou une phrase separé avec des espaces : ");
const mots = texte.split(" ")
console.log(mots.join(""))