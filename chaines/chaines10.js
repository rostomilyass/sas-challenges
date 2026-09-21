const prompt = require('prompt-sync')();
let chaine = prompt("ecrire un texte ou une phrase : ");
let sousChaine = prompt("ecrire le sous chaine que vous voulais detecter: ");
if (chaine.includes(sousChaine)===true){
    console.log("votre sous chaine apparait dans votre texte")
}else {
    console.log("votre sous chaine n'apparait pas au texte")
}