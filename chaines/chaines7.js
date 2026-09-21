const prompt = require('prompt-sync')();
let texte = prompt("entrer votre texte ou phrase en miniscule : ");
console.log(`votre phrase ou texte en majuscule : ${texte.toUpperCase()}`)