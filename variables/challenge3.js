const prompt = require('prompt-sync')();
let longk = parseFloat(prompt('quel est votre distance en km? '));
let longyard = longk * 1093.61;
console.log(`Votre distance en yard est ${longyard}yard`);