var s = "";
function Recution(str, i=1) {
  
  if(str.length != i){
    Recution(str, i+1)
  }
  s+=str[i-1];
}

function reverseString(str) {
  // var s = "";
  // for(var i=str.length-1; i>=0; i--){
  //   s+=str[i];
  // }
  // return s;

  return str.split("").reverse().join("");
}


Recution("hello");
console.log(s);
reverseString("hello");