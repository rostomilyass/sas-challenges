const prompt = require('prompt-sync')();
let R = parseFloat(prompt('donne moi le rayon de la sphère '));
let volume = (4/3) * Math.PI * (R**3);
console.log(`le volume du sphere est ${volume}`);