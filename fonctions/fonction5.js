const prompt = require('prompt-sync')();
function facto(x) {
    let fact =1;
    for(let i=1;i<=x;i++) {
        fact =fact*i;
    }
    return fact
}
let number = parseInt(prompt("donnez moi le numero que voulez savoir son factorielle : "))
console.log(`le factorielle de ${number} est ${facto(number)}`)