const prompt = require('prompt-sync')();
const tableau = [12, 15, 8, 17, 10];
let tablecopy = [];
for (let i=0;i<5;i++){
    tablecopy[i] = tableau [i]
}
console.log(`le tableau copié est celui ci : ${tableau}`)
console.log(`le tableau copie est celui ci : ${tablecopy}`)