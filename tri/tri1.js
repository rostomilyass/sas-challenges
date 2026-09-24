let tableau = [10, 9, 7, 13, 7, 9, 4];
console.log("tableau avant tri: ", tableau)
for (let i=0; i<tableau.length-1 ; i++){
        for(let j=0; j<tableau.length-1 ; j++){
            if(tableau[j]>tableau[j+1]){
                let temp = tableau[j];
                tableau[j] = tableau[j+1]
                tableau[j+1] = temp 
            }
        }
}
console.log("tableau apres tri: ", tableau);