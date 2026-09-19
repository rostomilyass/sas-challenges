const prompt = require('prompt-sync')();
let age = parseInt(prompt("mettre ton age"));
let montant = parseInt(prompt("entre le montant epargne"));
let anne = parseInt(prompt("mettre les annes de cotisations"));
if  (age < 65){
    console.log("Plan épargne non encore disponible")
}
else if ( anne >= 30 && montant>= 100000 ){
console.log("Plan complet avec pension élevée")
let tranche=Math.floor((montant-50000)/10000)
let bonus = tranche*5
console.log(`votre bonus est ${bonus}`)
}
else if (anne >= 20 && montant>= 50000){
    console.log("Plan partiel avec pension moyenne")
    let tranche=Math.floor((montant-50000)/10000)
let bonus = tranche*5
console.log(`votre bonus est ${bonus}`)
}
else {
    console.log("plan d'epargne non eligible")
    
}
