const prompt = require('prompt-sync')();
let taille = parseInt(prompt("combien d'elements veux tu dans ce tableau ?"));
let factor = parseInt(prompt("avec quelle nombre vous voulais muultipier votre tableau?"));
let tableau = [];

for (let i=0;i<taille;i++){
    let valeur = parseInt(prompt(`donnez moi la valeur du nmbre n°${i+1} `));
    tableau.push(valeur)
}
let tablemultip = [];
console.log(`votre multiplicantions de ${factor} est : `)
    for (let i=0;i<taille;i++){
    tablemultip.push(tableau[i]*factor)

}
console.log(tablemultip)
