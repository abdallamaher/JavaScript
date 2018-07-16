// function recursion(n){
//     if(n === 1)return 1;
//     return n*recursion(n-1);
// }
function factorialize(num) {
  var n = 1;
  for(var i = 2; i<=num; i++){
    n *= i; 
  }
  return n;
  
  // return recursion(num);
}

factorialize(5);