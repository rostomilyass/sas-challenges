const prompt = require('prompt-sync')();

let a = parseFloat(prompt("entrez a : "));
let b = parseFloat(prompt("entrez b : "));
let c = parseFloat(prompt("entrez c : "));

if (a === 0) {
    console.log("Ce n'est pas une équation du second degré (a ne doit pas être égal à 0).");
} else {
    let delta = b * b - 4 * a * c;

    if (delta > 0) {
        let x1 = (-b - Math.sqrt(delta)) / (2 * a);
        let x2 = (-b + Math.sqrt(delta)) / (2 * a);
        console.log(`Deux solutions réelles : x1 = ${x1} et x2 = ${x2}`);
    } else if (delta === 0) {
        let x0 = -b / (2 * a);
        console.log(`Une seule solution réelle : x0 = ${x0}`);
    } else {
        console.log("L'équation n'a pas de solution réelle.");
    }
}