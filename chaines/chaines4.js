const prompt = require('prompt-sync')();
let preTexte = prompt("ecrire votre premier chaine de characteres ");
let secTexte = prompt("ecrire votre deuxieme chaine de characteres ");
if (secTexte===preTexte){
    console.log("les chaînes sont égales")
}else{
    console.log("les chaînes sont pas égales")
}

