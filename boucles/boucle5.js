const prompt = require('prompt-sync')();
let base = parseInt(prompt("Entrez la base : "));
let n = parseInt(prompt("Entrez l'exposant : "));
let resultat = 1;
for (let i = 1; i <=n; i++) {
    resultat = resultat * base;
}
console.log(`${base}^${n} = ${resultat}`)