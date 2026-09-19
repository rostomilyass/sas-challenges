const prompt = require('prompt-sync')();
let taille = parseInt(prompt("combien d'elements veux tu dans ce tableau ?"));
let tableau = [];
let somme = 0
for (let i=0;i<taille;i++){
    let valeur = parseInt(prompt(`donnez moi la valeur du nmbre n°${i+1} `));
    tableau.push(valeur)
    somme += tableau[i]
}
console.log(`la somme de votre tableau est ${somme}`)
