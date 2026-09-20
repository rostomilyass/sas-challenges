const prompt = require('prompt-sync')();
let taille1 = parseInt(prompt("combien de nombre voulez-vous dans le 1 eme tableau?"))
let taille2 = parseInt(prompt("combien de nombre voulez-vous dans le 2 eme tableau?"))
let tableau1= [];
let tableau2= [];
let tableau3 =[]
for (let i=0 ; i < taille1; i++){
    let valeur1 = parseInt(prompt(`donnez moi l'element n°${i+1} ' `))
    tableau1.push(valeur1);
    tableau3.push(valeur1);
}
for (let i=0 ; i < taille2; i++){
    let valeur2 = parseInt(prompt(`donnez moi l'element n°${i+1} ' `))
    tableau2.push(valeur2);
    tableau3.push(valeur2);
}

console.log(tableau3)
