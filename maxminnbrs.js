let a = 5;
let b = 3;
let c = 8;
let d = 7;
let e = 1;
let max = a;
if(b>max) { max=b}  
if (c>max){ max=c}
if (d>max){max=d}
if (e>max){max=e}
let min = a;
if(b<min) {
    min=b
} if (c<min){
    min=c
} if (d<min){
    min=d
}if (e<min){
    min=e
}
let sommeTotale = a + b + c + d + e;
let sommeMin = sommeTotale - max;
let sommeMax = sommeTotale - min;
console.log(`Somme des 4 plus petits nombres : ${sommeMin}`);
console.log(`Somme des 4 plus grands nombres : ${sommeMax}`);

