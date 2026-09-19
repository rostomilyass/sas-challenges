const prompt = require('prompt-sync')();
let joursAccordes = parseInt(prompt("donnez votre jours accordes"))
let joursutilises = parseInt(prompt("donnez votre jours utilises"))
let Statut = parseInt(prompt("ecrit 0 pour temps partiel, 1 pour temps plein"))

if (joursutilises>joursAccordes){
    console.log("message d'alerte")
}else if (Statut===1){
    joursrestants=joursAccordes - joursutilises
    console.log(`votrejours restants en temps plein est : ${joursrestants}`)
}else {
    joursrestants=(joursAccordes/2)-joursutilises
    console.log(`votrejours restants en temps partiel est : ${joursrestants}`)
}



