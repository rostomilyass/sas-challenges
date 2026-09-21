const prompt = require('prompt-sync')();
let texte = prompt("ecrire votre chaine de charactere  ");
const carac = prompt("ecrire le charactere que voulais identifiez  ");
let repet = 0
for (let i = 0; i <=texte.length; i++) {
    if (carac===texte[i] ){
        repet++
    }else console.log("aucune repition de cette charactere")
}
console.log(repet)
