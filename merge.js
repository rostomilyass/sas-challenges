let tableau1 = [1 ,5 ,2 ,3]
let tableau2 = [7 ,4 ,9 ,5,8,7]
let tableauMerged = []
for (i=0; i<tableau1.length;i++){
    tableauMerged.push(tableau1[i])
}
 for (i=0; i<tableau2.length;i++){
    if(!(tableau2[i] in tableauMerged)){

        tableauMerged.push(tableau2[i])}   
    }
//    +:56!2vbdwxxxxxxxxxx