const prompt = require('prompt-sync')();
function parite(n){
    if((n%2)===0){
        return true;
    }else {
        return false;
    }
}
let nombre = parseInt(prompt("donnez moi le nombre que voulais savoir sa parité : "))
if (parite(nombre)) {
    console.log(`le numero ${nombre} est paire`)
}else {
    console.log(`le numero ${nombre} est impaire`)
}