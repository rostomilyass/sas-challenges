const prompt = require('prompt-sync')();
let taille = parseInt(prompt("combien de nombre voulez-vous dans ce tableau?"))
let tableau= [];

for (let i=0 ; i < taille; i++){
    let valeur = parseInt(prompt(`donnez moi l'element n°${i+1} ' `))
    tableau.push(valeur);
}
let max = tableau[0];
for (let i=0 ; i < taille; i++){
    if (tableau[i] > max) {
        max = tableau[i]
    }
    
}

console.log(`le max du tableau est ${max}`)