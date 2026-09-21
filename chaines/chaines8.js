const prompt = require('prompt-sync')();
let texte = prompt("entrer votre texte ou phrase en majuscule : ");
console.log(`votre phrase ou texte en minscule : ${texte.toLowerCase()}`)