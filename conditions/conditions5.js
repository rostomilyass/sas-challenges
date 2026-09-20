const prompt = require('prompt-sync')();
let annees = parseInt(prompt("Entrez le nombre des annees: "));
let temps = parseInt(prompt("ecit ton type de conversion selon son numero 1-Mois 2-jours 3-heures 4-minutes 5-secondes "));
let conversion;
if (temps === 1){
    conversion = annees*12
    console.log (`${annees} annees en mois est ${conversion}mois`)
}else if (temps === 2){
    conversion = annees*12*30
    console.log (`${annees} annees en jours est ${conversion}jours`)
}else if (temps === 3){
    conversion= annees*12*30*24
    console.log (`${annees} annees en heures est ${conversion}heure`)
}else if (temps === 4){
    conversion = annees*12*30*24*60
    console.log (`${annees} annees en minutes est ${conversion}min`)
}else if (temps === 5){
    conversion = annees*12*30*24*60*60
    console.log (`${annees} annees en secondes est ${conversion}s`)
}else{
    console.log (`erreur`)
}
