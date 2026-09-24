const prompt = require('prompt-sync')();

let livres = [];
 function ajouterLivre () {
    let titre = prompt("donnez moi le titre de livre : ")
    let auteur = prompt("donnez moi l'auteur du livre : ")
    let prix = parseFloat(prompt("donnez moi le prix du livre en dirham: "))
    let stock = parseInt(prompt("donnez la quantité en stock : "))
let livre = {
    titre : titre,
    auteur : auteur,
    prix : prix,
    stock : stock
 }
livres.push(livre);
console.log(`le livre ${titre} a été ajouté au stock`)
}

function afficherLivre (){
    if (livres.length===0){
        console.log("aucun livre en stock")
    return;
    }

console.log("--- liste des livres ---")
for (let i = 0; i<livres.length; i++){
    console.log(`${i+1}.titre : ${livres[i].titre} | auteur : ${livres[i].auteur} | prix : ${livres[i].prix} | stock : ${livres[i].stock} `)
}

}
function changerQuantite() {
    let titreCherche = prompt("c'est quoi le nom du livre que vous voulez moddifier sa quantité ? ")
    let trouve = false;
    for (let i=0;i<livres.length;i++){
        if (livres[i].titre===titreCherche){
            let newQuantity = parseInt(prompt("donne moi le nombre de quantite que vous desirer changer? "))
            livres[i].stock=newQuantity
            trouve = true
            break
        } 
    }
    if (!trouve){
            console.log("le livre est untrouvable ")
        }
            

    }
function supprimerLivre(){
    let titreSuprimmer = prompt("donnez moi le titre de livre ");
    index =-1;
    for(let i=0;i<livres.length;i++){
      if (livres[i].titre===titreSuprimmer) 
        index=1
    break
     
    }
    if(index!==-1){
        cons
    }

}   

    




