const prompt = require('prompt-sync')();
let tableau = [10, 9, 7, 13, 7, 9, 4];
let cible = parseInt(prompt("donnez le numero que vous rechercher : "))
let position=[]
for (let i=0;i<tableau.length;i++){
    if (tableau[i]===cible){
        position.push(i) 
    }
}
if (position.length>0) {
    console.log(`Élément ${cible} trouvé à l'indice ${position}.`);
} else {
    console.log(`Élément ${cible} non trouvé dans le tableau.`);
}