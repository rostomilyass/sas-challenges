const prompt = require('prompt-sync')();

let v1 = parseInt(prompt("entrez le premier nombre entier : "));
let v2 = parseInt(prompt("entrez le deuxieme nombre entier : "));

let somme;

if (v1 === v2) {
    somme = (v1 + v2) * 3;
} else {
    somme = v1 + v2;
}

console.log(`la somme est ${somme}`);