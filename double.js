let nbr = [10, 9, 7, 13, 7, 9, 4]
let double=[];
let i = 0;
for (let i=0; i<nbr.length;i++){
    for(let j=i+1; j<nbr.length;j++){
    if(nbr[i]===nbr[j]){
        double.push(nbr[i])
    }
    }
}

for (i=0;i<double.length;i++){
    let nombre = double[i];
    let compteur = 0;
    
    for(j=0;j<nbr.length;j++){
    if(nbr[j]===nombre){
        compteur += 1  
    }
}
console.log(`le nombre ${nombre} se repete dans ce taleau ${compteur} fois`)
}
 