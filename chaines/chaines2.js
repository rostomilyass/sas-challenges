const prompt = require('prompt-sync')();
let texte = prompt("ecrire une chaine de characteres ");
let compteur = 0
for (let caracters of texte){
    compteur++;
}
console.log(`la longeur du texte "${texte}" est de ${compteur} carcteres.`)
