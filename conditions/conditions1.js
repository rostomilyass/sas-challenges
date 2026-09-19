const prompt = require('prompt-sync')();
let nombre = parseInt(prompt("entrez un nombre entier :"));
if (nombre % 2===0 ) {
    console.log(`le nombre ${nombre} est pair.`);
} else {
    console.log(`le nombre ${nombre} est impair.`);
}