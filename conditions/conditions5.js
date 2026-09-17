const prompt = require('prompt-sync')();

let annee = parseFloat(prompt("Entrez le nombre d'années : "));

let continuer = true;

while (continuer) {
    console.log("\n--- MENU DE CONVERSION ---");
    console.log("1. Convertir en mois");
    console.log("2. Convertir en jours");
    console.log("3. Convertir en heures");
    console.log("4. Convertir en minutes");
    console.log("5. Convertir en secondes");
    console.log("6. Quitter");

    let choix = parseInt(prompt("Faites votre choix (1-6) : "));

    switch (choix) {
        case 1:
            console.log(`${annee} année(s) = ${annee * 12} mois`);
            break;
        case 2:
            console.log(`${annee} année(s) = ${annee * 365} jours`);
            break;
        case 3:
            console.log(`${annee} année(s) = ${annee * 365 * 24} heures`);
            break;
        case 4:
            console.log(`${annee} année(s) = ${annee * 365 * 24 * 60} minutes`);
            break;
        case 5:
            console.log(`${annee} année(s) = ${annee * 365 * 24 * 60 * 60} secondes`);
            break;
        case 6:
            console.log("Au revoir !");
            continuer = false;
            break;
        default:
            console.log("Choix invalide, veuillez réessayer.");
    }
}