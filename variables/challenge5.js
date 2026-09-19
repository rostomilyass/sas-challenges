const prompt = require('prompt-sync')();
let C = parseFloat(prompt('quel est votre temperature ? '));
if (C < 0) {
    console.log(`votre eau est solide`);
    } else if (C >= 0 && C < 100) {
    console.log(`votre eau est liquide`);
} else {
    console.log("votre eau est gazzeux");
}