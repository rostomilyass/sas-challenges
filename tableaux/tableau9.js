const prompt = require('prompt-sync')();
const tableau = [12, 15, 8, 17, 10];
let tableinvers = []
for (let i = 1; i <= tableau.length; i++) {
    
    tableinvers.push(tableau[tableau.length-i])
}
console.log(tableau)
console.log(tableinvers)
