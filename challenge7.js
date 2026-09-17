const prompt = require('prompt-sync')();
let a = parseFloat(prompt('donne moi ton nombre a '));
let b = parseFloat(prompt('donne moi ton nombre b '));
let c = parseFloat(prompt('donne moi ton nombre c '));
let moyenneponde = (a*2+b*3+c*5)/10;
console.log(`Votre moyenne pondere est ${moyenneponde}`);