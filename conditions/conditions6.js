const prompt = require('prompt-sync')();

let nombre = parseFloat(prompt("Entrez un nombre : "));

if (nombre < 0) {
    console.log(`${nombre} est un nombre négatif.`);
} else if (nombre > 0) {
    console.log(`${nombre} est un nombre positif.`);
} else {
    console.log(`${nombre} est égal à zéro.`);
}