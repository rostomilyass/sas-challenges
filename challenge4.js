const prompt = require('prompt-sync')();
let vitessek = parseFloat(prompt('quel est votre vitesse en km/h? '));
let vitessem = vitessek * 0.27778;
console.log(`Votre vitesse en m/s est ${vitessem}m/s`);