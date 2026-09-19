const prompt = require('prompt-sync')();
let name = prompt('quel est votre nom? ');
let prenom = prompt('quel est ton prenom? ');
let age = prompt('Quel age a tu? ');
let sexe = prompt('homme ou femme');
let email = prompt('inserer votre mail');

console.log(`voila vos informations personelles :  
-nom : ${name}
-prenom : ${prenom}
-age : ${age} ans
-sexe : ${sexe}
-email : ${email}`);