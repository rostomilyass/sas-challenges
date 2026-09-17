const prompt = require('prompt-sync')();
let lo = parseFloat(prompt('donne moi la longeur du rectangle '));
let la = parseFloat(prompt('donne moi la largeur du rectangle '));
let surface = lo*la;
console.log(`la surface du rectangle est ${surface}`);