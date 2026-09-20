const prompt = require('prompt-sync')();
let date = prompt("donnez moi la date (en forme dd/mm/aaaa)");
let numbers = date.split("/") 
let jour = numbers[0]
let mois = parseInt(numbers[1])
let annee = numbers[2]
let nomMois;
if (mois === 1){
    nomMois="janvier";
}else if (mois === 2){
    nomMois="fevrier";
}else if (mois === 3){
    nomMois="mars";
}else if (mois === 4){
    nomMois="avril";
}else if (mois === 5){
    nomMois="mai";
}else if (mois === 6){
    nomMois="juin";
}else if (mois === 7){
    nomMois="juillet";
}else if (mois === 8){
    nomMois="aout";
}else if (mois === 9){
    nomMois="septembre";
}else if (mois === 10){
    nomMois="octobre";
}else if (mois === 11){
    nomMois="novembre";
}else if (mois === 12){
    nomMois="decembre";
}else {
    nomMois= "mois invalide" 
}
console.log(`${jour}-${nomMois}-${annee}`);