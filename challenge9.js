const prompt = require('prompt-sync')();
let x1 = parseFloat(prompt('donne moi ton nombre x1 '));
let x2 = parseFloat(prompt('donne moi ton nombre x2 '));
let y1 = parseFloat(prompt('donne moi ton nombre y1 '));
let y2 = parseFloat(prompt('donne moi ton nombre y2 '));
let z1 = parseFloat(prompt('donne moi ton nombre z1 '));
let z2 = parseFloat(prompt('donne moi ton nombre z2 '));
let distance = ((x2-x1)**2 +(y2-y1)**2 +(z2-z1)**2)**1/2;
console.log(`la distance entre x et y est ${distance}`);