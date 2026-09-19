const prompt = require('prompt-sync')();
let tempc = parseFloat(prompt('quel est votre temperature en Celsius? '));
let tempk = tempc + 273.15;
console.log(`Votre temperature en  Kelvin est ${tempk}K`);