const prompt = require('prompt-sync')();
let a = parseFloat(prompt('donne moi ton nombre a '));
let b = parseFloat(prompt('donne moi ton nombre b '));
let c = parseFloat(prompt('donne moi ton nombre c '));
let moyennegeom = (a*b*c)**1/3;
console.log(`Votre moyenne geometrique est ${moyennegeom}`);