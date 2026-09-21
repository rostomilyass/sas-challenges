const personne ={
    prenom : "lyass",
    nom: "rostom",
    notes:  [19, 16, 15, 14, 18],
};
console.log(`Etudiant : ${personne.prenom} ${personne.nom}`)
console.log ("note de l'etudiant = " + personne.notes.join(", "))
let somme = 0;
for (let note of personne.notes) {
    somme += note;
}
let moyenne = somme / 5;
console.log(`la moyenne est : ${moyenne}`);