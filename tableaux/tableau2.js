const prompt = require('prompt-sync')();
let taille = parseInt(prompt("combien d'elements veux tu dans ce tableau ?"))
let tableau = [];
for (let i = 0; i < taille; i++) {
    let valeur = parseInt(prompt(`entrer l'element n°${i + 1} `));
    tableau.push(valeur);
}
console.log("voici votre tabelau")
console.log(tableau);