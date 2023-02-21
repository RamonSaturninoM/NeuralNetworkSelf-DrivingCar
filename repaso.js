

const x= 5;
const y= 10;

if(x < y){
    console.log("x es menor que y")
}else{
    console.log("y es mayor que x")
}

//if u saw me, i love u <3

function isValidSubsequence(array, sequence) {
    // Write your code here.
    let idx = 0;
    
    for(i=0; i<array.length; i++){
      if (idx === sequence.length){
        break;
      }
      if(array[i] === sequence[idx] && idx<sequence.length){
        idx++;
      }
    }
  
    return idx === sequence.length
  
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;
}