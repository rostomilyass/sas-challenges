const prompt = require('prompt-sync')();
let tableau = [10 ,9 ,7 ,13 ,7 ,9 ,4 ]
let premierMoitie = []
let secondeMoitie = []
let index = parseInt(prompt("donnez ou divisez les tableaux : "))
if (index<tableau.length){
for (let i=0; i<7;i++){
    if(i<index){
        premierMoitie.push(tableau[i])
    }else {
        secondeMoitie.push(tableau[i])
    }
}
console.log("la premier moitié est : ", premierMoitie)
console.log("la deuxieme moitié est : ", secondeMoitie)
}else {
    console.log("erreur votre index est plus gros que l'index du tableau")
}
