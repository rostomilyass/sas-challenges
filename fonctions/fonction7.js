const prompt = require('prompt-sync')();
function compteArebours(n) {
    for (let i=n;i>=0;i--){
        console.log(i);
    }
}
let numero = parseInt(prompt("donnez moi votre numero pour ce compte a rebours : "))
compteArebours(numero);5