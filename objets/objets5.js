function creerLivre (titre,auteur,annee) {
    return{
        titre : titre,
        auteur : auteur,
        annee : annee
    }
}
let livre = creerLivre ("antigone","paul cohelo", 1999)
console.log(`titre : ${livre.titre}`);
console.log(`Auteur : ${livre.auteur}`);
console.log(`Année : ${livre.annee}`);