let nbr = [10, 9, 7, 13, 7, 9, 4]
let max= nbr[0]
let max2=nbr[0]

for (let i= 0;i<7;i++){
   if (nbr[i]>max ){
    max=nbr[i]
   } 
} 
for (let i= 0;i<7;i++){
  if (max>nbr[i] && nbr[i]>max2 )
   {
    max2=nbr[i]
   } 
}
console.log(max2)