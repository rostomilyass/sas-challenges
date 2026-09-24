const prompt = require ('prompt-sync')();
function fibo(n) {
    a=0
    b=1
    for (i=0;i<n;i++){
        suivant=a+b
        a=b
        b=suivant
    }
    return a
}
let n = parseInt(prompt("donnez moi le nombre que vous voulais son fibonacci : "))
console.log(`le fibonacci de ${n} est ${fibo(n)} `)