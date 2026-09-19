const prompt = require('prompt-sync')();
let taille = parseInt(prompt("combien d'elements veux tu dans ce tableau ?")); 
let tableau = [];

for (let i=0;i<taille;i++){
    let valeur = parseInt(prompt(`donnez moi la valeur du nmbre n°${i+1} `));
    tableau.push(valeur)
}
let cible = parseInt(prompt("Entrez la valeur que vous desirer changer: "));