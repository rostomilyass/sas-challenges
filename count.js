const prompt = require('prompt-sync')();
let tab = ["A","B","E","A"]
let valeurFind = prompt("quelle lettre voulais vous chercher ? ")
let compteur = 0
for (let i=0; i<tab.length;i++){
    if(tab[i]===valeurFind){
        compteur++
    }
}
console.log(`"${valeurFind}" apparait ${compteur} fois`)