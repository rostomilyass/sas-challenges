const prompt = require('prompt-sync')();
let lettre = prompt("entrez la lettre :").toLowerCase();
switch (lettre) {
    case 'a':
    case 'e':   
    case 'i':
    case 'u':
    case 'o':
    case 'y':
console.log(`la lettre "${lettre}" est une voyelle.`);
    break;
    default:    
        console.log(`la lettre "${lettre}" est une consonne.`);
}