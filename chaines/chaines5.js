const prompt = require('prompt-sync')();
let mot = prompt("ecrire votre chaine de charactere que vous voulais inverser ");
let motb = []
for (let i = mot.length-1; i >= 0; i--) {
   motb[mot.length-i-1] = mot[i]
   
}

console.log(motb.join(""))