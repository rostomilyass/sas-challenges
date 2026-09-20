const prompt = require('prompt-sync')();
let notes = parseInt(prompt("Entrez votre note sur 20 : "));
if (notes<10){
    console.log(" tu es recalé")
}else if (notes<12){
    console.log("metion passable")
}else if (notes<14){
    console.log("mention assez bien")
}else if (notes<16){
    console.log("mention bien")
}else  {
    console.log("mention tres bien")
}